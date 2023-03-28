import { TariffsModel } from "../../common/db/model/tariffs/tariffs.model";
import { aggregate, getPaging } from "../../common/service/base.service";
import { PagingDto } from "../../common/validation/dto/paging.dto";

export async function getPagingTariffsService(data: PagingDto) {
    return await getPaging(TariffsModel, data);
}
export async function getAllTariffsService() {
    const $match = {
        $match: {
            isDeleted: false,
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
    return await aggregate(TariffsModel, $pipeline);
}
