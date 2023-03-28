import { UssdModel } from "../../common/db/model/ussd/ussd.model";
import { getPaging } from "../../common/service/base.service";
import { PagingDto } from "../../common/validation/dto/paging.dto";

export async function getPagingUssdService(data: PagingDto) {
    return await getPaging(UssdModel, data);
}
