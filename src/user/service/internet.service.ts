import { Types } from "mongoose";
import { InternetModel } from "../../common/db/model/internet/internet.model";
import { InternetTypeModel } from "../../common/db/model/internet/type/type.model";
import { aggregate, getAll, getPaging } from "../../common/service/base.service";
import { PagingDto } from "../../common/validation/dto/paging.dto";

export async function getAllInternetTypeService() {
    const result = await getAll(InternetTypeModel);
    return result;
}

export async function getInternetByTypeIdService(id) {
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
    return await aggregate(InternetModel, $pipeline);
}

export async function getPagingInternetService(data: PagingDto) {
    return await getPaging(InternetModel, data);
}
