import { ErrorCodes } from "../../../constant/error.codes";
import { BaseResponse } from "../../../error/base.response";

export class NewsResponse extends BaseResponse {
    static AlreadyExists(data: any = false) {
        return new NewsResponse(ErrorCodes.NewsAlreadyExists, "News already exists", data);
    }

    static NotFound(data: any = false) {
        return new NewsResponse(ErrorCodes.NewsNotFound, "News not found", data, false, 404)
    }

    static InvalidImage(data: any = false) {
        return new NewsResponse(ErrorCodes.InvalidImage, "Invalid News Image", data)
    }
}
