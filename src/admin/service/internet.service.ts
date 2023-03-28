import { InternetModel } from "../../common/db/model/internet/internet.model";
import { InternetTypeResponse } from "../../common/db/model/internet/type/type.error";
import { InternetTypeModel } from "../../common/db/model/internet/type/type.model";
import { create, getPaging, updateOneById } from "../../common/service/base.service";
import { InternetDto, InternetTypeDto } from "../../common/validation/dto/internet.dto";
import { PagingDto } from "../../common/validation/dto/paging.dto";


/* *********************   INTERNET_TYPES   ******************** */
export async function createInternetTypeService(data: InternetTypeDto) {
    try {
        return await create(InternetTypeModel, data);
    } catch (e) {
        if (e.code == 11000) throw InternetTypeResponse.AlreadyExists(Object.keys(e.keyPattern));
        else throw InternetTypeResponse.UnknownError(e);
    }
}

export async function getPagingInternetTypeService(data: PagingDto) {
    return await getPaging(InternetTypeModel, data);
}

export async function updateInternetTypeService(id, data: InternetTypeDto) {
    try {
        return await updateOneById(InternetTypeModel, id, data);
    } catch (e) {
        if (e.code == 11000) throw InternetTypeResponse.AlreadyExists(Object.keys(e.keyPattern));
        else throw InternetTypeResponse.UnknownError(e);
    }
}

export async function deleteInternetTypeService(data) {
    for (const id of data._ids) {
        await updateOneById(InternetTypeModel, id, { isDeleted: true })
    }
    return true;
}



/* *********************   INTERNET   ******************** */
export async function createInternetService(data: InternetDto) {
    try {
        return await create(InternetModel, data);
    } catch (e) {
        console.log(e);
        // if (e.code == 11000)
        //     throw EmployeeResponse.AlreadyExists(Object.keys(e.keyPattern));
        // else throw EmployeeResponse.UnknownError(e);
    }
}

export async function getPagingInternetService(data: PagingDto) {
    return await getPaging(InternetModel, data);
}
