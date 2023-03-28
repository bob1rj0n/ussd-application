import { DtoGroup } from "../../common/constant/dto.group";
import { PagingDto } from "../../common/validation/dto/paging.dto";
import { SmsTypeDto } from "../../common/validation/dto/sms.dto";
import { validateIt } from "../../common/validation/validate";
import { getAllSmsTypeService, getPagingSmsService, getSmsByTypeIdService } from "../service/sms.service";



export async function getAllSmsTypeHandler(req, reply) {
    const result = await getAllSmsTypeService();
    reply.success(result);
}


export async function getSmsByTypeIdHandler(req, reply) {
    const data = await validateIt(req.params, SmsTypeDto, DtoGroup.GET_BY_ID);
    const internet = await getSmsByTypeIdService(data._id);
    reply.success(internet);
}



export async function getPagingSmsHandler(req, reply) {
    const data = await validateIt(req.query, PagingDto, DtoGroup.PAGING);
    const result = await getPagingSmsService(data);
    reply.success(result);
}
