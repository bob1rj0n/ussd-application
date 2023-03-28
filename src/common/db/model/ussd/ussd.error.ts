import { ErrorCodes } from "../../../constant/error.codes";
import { BaseResponse } from "../../../error/base.response";

export class UssdResponse extends BaseResponse {
    static AlreadyExists(data: any = false) {
        return new UssdResponse(ErrorCodes.UssdAlreadyExists, "Ussd already exists", data);
    }

    static NotFound(data: any = false) {
        return new UssdResponse(ErrorCodes.UssdNotFound, "Ussd not found", data, false, 404)
    }
}
