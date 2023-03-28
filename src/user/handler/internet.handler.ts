import { DtoGroup } from "../../common/constant/dto.group";
import { InternetTypeDto } from "../../common/validation/dto/internet.dto";
import { PagingDto } from "../../common/validation/dto/paging.dto";
import { validateIt } from "../../common/validation/validate";
import { getAllInternetTypeService, getInternetByTypeIdService, getPagingInternetService } from "../service/internet.service";


export async function getAllInternetTypeHandler(req, reply) {
    const result = await getAllInternetTypeService();
    reply.success(result);
}


export async function getInternetByTypeIdHandler(req, reply) {
    const data = await validateIt(req.params, InternetTypeDto, DtoGroup.GET_BY_ID);
    const internet = await getInternetByTypeIdService(data._id);
    reply.success(internet);
}


export async function getPagingInternetHandler(req, reply) {
    const data = await validateIt(req.query, PagingDto, DtoGroup.PAGING);
    const result = await getPagingInternetService(data);
    reply.success(result);
}
