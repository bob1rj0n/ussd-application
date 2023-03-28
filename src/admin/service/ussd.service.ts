import { UssdResponse } from "../../common/db/model/ussd/ussd.error";
import { UssdModel } from "../../common/db/model/ussd/ussd.model";
import { create, getPaging, updateOneById } from "../../common/service/base.service";
import { PagingDto } from "../../common/validation/dto/paging.dto";
import { UssdDto } from "../../common/validation/dto/ussd.dto";

export async function createUssdService(data: UssdDto) {
    try {
        return await create(UssdModel, data);
    } catch (e) {
        if (e.code == 11000) throw UssdResponse.AlreadyExists(Object.keys(e.keyPattern));
        else throw UssdResponse.UnknownError(e);
    }
}

export async function getPagingUssdService(data: PagingDto) {
    return await getPaging(UssdModel, data);
}

export async function updateUssdService(id, data: UssdDto) {
    try {
        return await updateOneById(UssdModel, id, data);
    } catch (e) {
        if (e.code == 11000) throw UssdResponse.AlreadyExists(Object.keys(e.keyPattern));
        else throw UssdResponse.UnknownError(e);
    }
}

export async function deleteUssdService(data) {
    for (const id of data._ids) {
        await updateOneById(UssdModel, id, { isDeleted: true });
    }
    return true;
}
