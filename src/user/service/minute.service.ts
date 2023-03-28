import { Types } from "mongoose";
import { MinutesModel } from "../../common/db/model/minutes/minutes.model";
import { MinuteTypesModel } from "../../common/db/model/minutes/type/type.model";
import { aggregate, getAll, getPaging } from "../../common/service/base.service";
import { PagingDto } from "../../common/validation/dto/paging.dto";

export async function getAllMinuteTypeService() {
    const result = await getAll(MinuteTypesModel);
    return result;
}

export async function getMinuteByTypeIdService(id) {
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
    return await aggregate(MinutesModel, $pipeline);
}


export async function getPagingMinutesService(data: PagingDto) {
    return await getPaging(MinutesModel, data);
}
