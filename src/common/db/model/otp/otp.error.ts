import { ErrorCodes } from "../../../constant/error.codes";
import { BaseResponse } from "../../../error/base.response";

export class OtpResponse extends BaseResponse {
    static AlreadyExists(data: any = false) {
        return new OtpResponse(ErrorCodes.OtpAlreadyExists, "Otp already exists", data);
    }

    static NotFound(data: any = false) {
        return new OtpResponse(ErrorCodes.OtpNotFound, "Otp not found", data, false, 404)
    }

    static InvalidOtp(data: any = false) {
        return new OtpResponse(ErrorCodes.InvalidOtp, "Invalid Otp", data)
    }
}
