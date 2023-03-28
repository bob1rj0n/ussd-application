import { ErrorCodes } from "../../../constant/error.codes";
import { BaseResponse } from "../../../error/base.response";

export class InternetResponse extends BaseResponse {
    static AlreadyExists(data: any = false) {
        return new InternetResponse(ErrorCodes.InternetAlreadyExists, "Internet already exists", data);
    }

    static NotFound(data: any = false) {
        return new InternetResponse(ErrorCodes.InternetNotFound, "Internet not found", data, false, 404)
    }
}
