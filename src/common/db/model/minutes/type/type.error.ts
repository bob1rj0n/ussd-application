import { ErrorCodes } from "../../../../constant/error.codes";
import { BaseResponse } from "../../../../error/base.response";

export class MinuteTypeResponse extends BaseResponse {
    static AlreadyExists(data: any = false) {
        return new MinuteTypeResponse(ErrorCodes.MinuteTypeAlreadyExists, "Minute type already exists", data);
    }

    static NotFound(data: any = false) {
        return new MinuteTypeResponse(ErrorCodes.MinuteTypeNotFound, "Minute type not found", data, false, 404)
    }
}
