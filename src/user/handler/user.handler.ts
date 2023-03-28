import { DtoGroup } from "../../common/constant/dto.group";
import { jwtSign } from "../../common/middleware/authentication";
import { OtpDto, UserDto } from "../../common/validation/dto/user.dto";
import { validateIt } from "../../common/validation/validate";
import { checkOtpService, checkUserService, registerUserService, updateUserService } from "../service/user.service";

export async function checkUserHandler(req, reply) {
    const data = await validateIt(req.body, UserDto, DtoGroup.CHECK_USER);
    const result = await checkUserService(data.phoneNumber);
    reply.success(result);
}

export async function registerUserHandler(req, reply) {
    const data = await validateIt(req.body, UserDto, DtoGroup.REGISTER);
    const user = await registerUserService(data);
    reply.success(user);
}

export async function checkOtpHandler(req, reply) {
    const data = await validateIt(req.body, OtpDto, DtoGroup.CHECK_OTP);
    const user = await checkOtpService(data);
    const result: any = user.toObject();
    const token: any = await jwtSign(req, { phoneNumber: user.phoneNumber });
    result.token = token;
    reply.success(result);
}

export async function getMySelfHandler(req, reply) {
    const user = (req.user);
    reply.success(user);
}

export async function updateUserHandler(req, reply) {
    const userId = (req.user._id).toString();
    const data = await validateIt(req.body, UserDto, DtoGroup.UPDATE);
    await updateUserService(userId, data);
    reply.success(true);
}
