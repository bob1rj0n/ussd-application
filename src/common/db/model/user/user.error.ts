import { ErrorCodes } from "../../../constant/error.codes";
import { BaseResponse } from "../../../error/base.response";

export class UserResponse extends BaseResponse {
    static AlreadyExists(data: any = false) {
        return new UserResponse(ErrorCodes.UserAlreadyExists, "User already exists", data);
    }

    static NotFound(data: any = false) {
        return new UserResponse(ErrorCodes.UserNotFound, "User not found", data, false, 404)
    }

    static InvalidPassword(data: any = false) {
        return new UserResponse(ErrorCodes.UserInvalidPassword, "User invalid password", data)
    }
}
