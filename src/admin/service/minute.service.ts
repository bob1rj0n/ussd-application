import { MinutesModel } from "../../common/db/model/minutes/minutes.model";
import { MinuteTypeResponse } from "../../common/db/model/minutes/type/type.error";
import { MinuteTypesModel } from "../../common/db/model/minutes/type/type.model";
import { create, getPaging, updateOneById } from "../../common/service/base.service";
import { MinuteDto } from "../../common/validation/dto/minutes.dto";
import { PagingDto } from "../../common/validation/dto/paging.dto";


/* *********************   MINUTE_TYPES   ******************** */
export async function createMinuteTypeService(data) {
    try {
        return await create(MinuteTypesModel, data);
    } catch (e) {
        if (e.code == 11000) throw MinuteTypeResponse.AlreadyExists(Object.keys(e.keyPattern));
        else throw MinuteTypeResponse.UnknownError(e);
    }
}

export async function getPagingMinuteTypeService(data: PagingDto) {
    return await getPaging(MinuteTypesModel, data);
}

export async function updateMinuteTypeService(id, data) {
    try {
        return await updateOneById(MinuteTypesModel, id, data);
    } catch (e) {
        if (e.code == 11000) throw MinuteTypeResponse.AlreadyExists(Object.keys(e.keyPattern));
        else throw MinuteTypeResponse.UnknownError(e);
    }
}

export async function deleteMinuteTypeService(data) {
    for (const id of data._ids) {
        await updateOneById(MinuteTypesModel, id, { isDeleted: true })
    }
    return true;
}


/* *********************   MINUTES   ******************** */
export async function createMinuteService(data: MinuteDto) {
    try {
        return await create(MinutesModel, data);
    } catch (e) {
        console.log(e);
        // if (e.code == 11000)
        //     throw EmployeeResponse.AlreadyExists(Object.keys(e.keyPattern));
        // else throw EmployeeResponse.UnknownError(e);
    }
}

export async function getPagingMinutesService(data: PagingDto) {
    return await getPaging(MinutesModel, data);
}
