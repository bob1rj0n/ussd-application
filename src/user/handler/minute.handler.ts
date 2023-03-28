import { DtoGroup } from "../../common/constant/dto.group";
import { MinuteTypeDto } from "../../common/validation/dto/minutes.dto";
import { PagingDto } from "../../common/validation/dto/paging.dto";
import { validateIt } from "../../common/validation/validate";
import { getAllMinuteTypeService, getMinuteByTypeIdService, getPagingMinutesService } from "../service/minute.service";


export async function getAllMinuteTypeHandler(req, reply) {
    const result = await getAllMinuteTypeService();
    reply.success(result);
}


export async function getMinuteByTypeIdHandler(req, reply) {
    const data = await validateIt(req.params, MinuteTypeDto, DtoGroup.GET_BY_ID);
    const internet = await getMinuteByTypeIdService(data._id);
    reply.success(internet);
}


export async function getPagingMinutesHandler(req, reply) {
    const data = await validateIt(req.query, PagingDto, DtoGroup.PAGING);
    const result = await getPagingMinutesService(data);
    reply.success(result);
}
