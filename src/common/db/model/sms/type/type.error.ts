import { ErrorCodes } from "../../../../constant/error.codes";
import { BaseResponse } from "../../../../error/base.response";

export class SmsTypeResponse extends BaseResponse {
    static AlreadyExists(data: any = false) {
        return new SmsTypeResponse(ErrorCodes.SmsTypeAlreadyExists, "Sms type already exists", data);
    }

    static NotFound(data: any = false) {
        return new SmsTypeResponse(ErrorCodes.SmsTypeNotFound, "Sms type not found", data, false, 404)
    }
}
