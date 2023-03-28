import { TariffsResponse } from "../../common/db/model/tariffs/tariffs.error";
import { TariffsModel } from "../../common/db/model/tariffs/tariffs.model";
import { create, getPaging, updateOneById } from "../../common/service/base.service";
import { PagingDto } from "../../common/validation/dto/paging.dto";
import { TariffsDto } from "../../common/validation/dto/tariffs.dto";

export async function createTariffsService(data: TariffsDto) {
    try {
        return await create(TariffsModel, data);
    } catch (e) {
        if (e.code == 11000) throw TariffsResponse.AlreadyExists(Object.keys(e.keyPattern));
        else throw TariffsResponse.UnknownError(e);
    }
}

export async function getPagingTariffsService(data: PagingDto) {
    return await getPaging(TariffsModel, data);
}

export async function updateTariffsService(id, data: TariffsDto) {
    try {
        return await updateOneById(TariffsModel, id, data);
    } catch (e) {
        if (e.code == 11000) throw TariffsResponse.AlreadyExists(Object.keys(e.keyPattern));
        else throw TariffsResponse.UnknownError(e);
    }
}

export async function deleteTariffsService(data) {
    for (const id of data._ids) {
        await updateOneById(TariffsModel, id, { isDeleted: true });
    }
    return true;
}
