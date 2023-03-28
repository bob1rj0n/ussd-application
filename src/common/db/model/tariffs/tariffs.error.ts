import { ErrorCodes } from "../../../constant/error.codes";
import { BaseResponse } from "../../../error/base.response";

export class TariffsResponse extends BaseResponse{
    static AlreadyExists(data: any = false) {
        return new TariffsResponse(ErrorCodes.TarifAlreadyExists, "Tarif already exists", data);
    }

    static NotFound(data: any = false) {
        return new TariffsResponse(ErrorCodes.TarifNotFound, "Tarif not found", data, false, 404)
    }
}