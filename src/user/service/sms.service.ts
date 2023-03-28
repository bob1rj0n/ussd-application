import { Types } from "mongoose";
import { SmsModel } from "../../common/db/model/sms/sms.model";
import { SmsTypesModel } from "../../common/db/model/sms/type/type.model";
import { aggregate, getAll, getPaging } from "../../common/service/base.service";
import { PagingDto } from "../../common/validation/dto/paging.dto";


export async function getAllSmsTypeService() {
    const result = await getAll(SmsTypesModel);
    return result;
}

export async function getSmsByTypeIdService(id) {
    const $match = {
        $match: {
            isDeleted: false,
            typeId: new Types.ObjectId(id)
        }
    }
    const $sort = {
        $sort: {
            name: 1
        }
    }
    const $project = {
        $project: {
            isDeleted: 0,
            __v: 0
        }
    }
    const $pipeline = [
        $match,
        $sort,
        $project
    ]
    return await aggregate(SmsModel, $pipeline);
}

export async function getPagingSmsService(data: PagingDto) {
    return await getPaging(SmsModel, data);
}
