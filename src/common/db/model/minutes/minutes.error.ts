import { ErrorCodes } from "../../../constant/error.codes";
import { BaseResponse } from "../../../error/base.response";

export class MinutesResponse extends BaseResponse {
    static AlreadyExists(data: any = false) {
        return new MinutesResponse(ErrorCodes.MinutesAlreadyExists, "Minutes already exists", data);
    }

    static NotFound(data: any = false) {
        return new MinutesResponse(ErrorCodes.MinutesNotFound, "Minutes not found", data, false, 404)
    }
}
