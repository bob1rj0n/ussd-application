import { ErrorCodes } from "../../../../constant/error.codes";
import { BaseResponse } from "../../../../error/base.response";

export class InternetTypeResponse extends BaseResponse {
    static AlreadyExists(data: any = false) {
        return new InternetTypeResponse(ErrorCodes.InternetTypeAlreadyExists, "Internet type already exists", data);
    }

    static NotFound(data: any = false) {
        return new InternetTypeResponse(ErrorCodes.InternetTypeNotFound, "Internet type not found", data, false, 404)
    }
}
