import { ErrorCodes } from "../../../constant/error.codes"
import { BaseResponse } from "../../../error/base.response"

export class AdminResponse extends BaseResponse {
    static AlreadyExists(data: any = false) {
        return new AdminResponse(ErrorCodes.AdminAlreadyexists, "Admin already exists", data)
    }

    static NotFound(data: any = false) {
        return new AdminResponse(ErrorCodes.AdminNotFound, "Admin Not Found", data)
    }

    static InvalidPassword(data: any = false) {
        return new AdminResponse(ErrorCodes.AdminInvalidPassword, "Admin invalid password", data)
    }
}

