import { ErrorCodes } from "../../../constant/error.codes";
import { BaseResponse } from "../../../error/base.response";

export class SmsResponse extends BaseResponse {
    static AlreadyExists(data: any = false) {
        return new SmsResponse(ErrorCodes.SmsAlreadyExists, "Sms already exists", data);
    }

    static NotFound(data: any = false) {
        return new SmsResponse(ErrorCodes.SmsNotFound, "Sms not found", data, false, 404)
    }
}
