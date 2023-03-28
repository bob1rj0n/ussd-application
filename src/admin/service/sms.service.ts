import { SmsModel } from "../../common/db/model/sms/sms.model";
import { SmsTypeResponse } from "../../common/db/model/sms/type/type.error";
import { SmsTypesModel } from "../../common/db/model/sms/type/type.model";
import { create, getPaging, updateOneById } from "../../common/service/base.service";
import { PagingDto } from "../../common/validation/dto/paging.dto";
import { SmsDto } from "../../common/validation/dto/sms.dto";



/* *********************   SMS_TYPES   ******************** */
export async function createSmsTypeService(data) {
    try {
        return await create(SmsTypesModel, data);
    } catch (e) {
        if (e.code == 11000) throw SmsTypeResponse.AlreadyExists(Object.keys(e.keyPattern));
        else throw SmsTypeResponse.UnknownError(e);
    }
}

export async function getPagingSmsTypeService(data: PagingDto) {
    return await getPaging(SmsTypesModel, data);
}

export async function updateSmsTypeService(id, data) {
    try {
        return await updateOneById(SmsTypesModel, id, data);
    } catch (e) {
        if (e.code == 11000) throw SmsTypeResponse.AlreadyExists(Object.keys(e.keyPattern));
        else throw SmsTypeResponse.UnknownError(e);
    }
}

export async function deleteSmsTypeService(data) {
    for (const id of data._ids) {
        await updateOneById(SmsTypesModel, id, { isDeleted: true })
    }
    return true;
}

/* *********************   SMS   ******************** */
export async function createSmsService(data: SmsDto) {
    try {
        return await create(SmsModel, data);
    } catch (e) {
        console.log(e);
        // if (e.code == 11000)
        //     throw EmployeeResponse.AlreadyExists(Object.keys(e.keyPattern));
        // else throw EmployeeResponse.UnknownError(e);
    }
}

export async function getPagingSmsService(data: PagingDto) {
    return await getPaging(SmsModel, data);
}
