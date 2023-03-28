import { OtpResponse } from "../../common/db/model/otp/otp.error";
import { OtpModel } from "../../common/db/model/otp/otp.model";
import { UserResponse } from "../../common/db/model/user/user.error";
import { UserModel } from "../../common/db/model/user/user.model";
import { create, findById, findByQuery, updateOneById } from "../../common/service/base.service";
import { UserDto } from "../../common/validation/dto/user.dto";

export async function checkUserService(phoneNumber: string) {
    const user = await findByQuery(UserModel, { phoneNumber: phoneNumber });
    if (!user) { return false };
    return true;
}

export async function registerUserService(data: UserDto) {
    try {
        let user = await findByQuery(UserModel, { phoneNumber: data.phoneNumber, isDeleted: false });
        if (!user) user = await create(UserModel, data);
        let otp = await findByQuery(OtpModel, { phoneNumber: data.phoneNumber, isDeleted: false });
        if (!otp) {
            const code = (Math.floor(100000 + Math.random() * 900000)).toString();
            otp = await create(OtpModel, { phoneNumber: user.phoneNumber, code: code });
        }
        console.log("Your otp data : ", otp);

        return true;
    } catch (e) {
        console.log(e);
    }
}

export async function checkOtpService(data) {
    const otp = await findByQuery(OtpModel, { phoneNumber: data.phoneNumber });
    if (data.code !== otp.code) { throw OtpResponse.InvalidOtp(data.code) };
    await updateOneById(OtpModel, otp._id, { isDeleted: true });

    const user = await findByQuery(UserModel, { phoneNumber: data.phoneNumber });
    return user;
}

export async function updateUserService(id, data) {
    try {
        return await updateOneById(UserModel, id, data);
    }
    catch (e) {
        console.log(e);
    }
}
