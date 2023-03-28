import { DtoGroup } from "../../common/constant/dto.group";
import { DeleteDto } from "../../common/validation/base.dto";
import { PagingDto } from "../../common/validation/dto/paging.dto";
import { SmsDto, SmsTypeDto } from "../../common/validation/dto/sms.dto";
import { validateIt } from "../../common/validation/validate";
import { createSmsService, createSmsTypeService, deleteSmsTypeService, getPagingSmsService, getPagingSmsTypeService, updateSmsTypeService } from "../service/sms.service";



/* *********************   MINUTE_TYPES   ******************** */
export async function createSmsTypeHandler(req, reply) {
    const data = await validateIt(req.body, SmsTypeDto, DtoGroup.CREATE);
    const result = await createSmsTypeService(data);
    reply.success(result._id);
}

export async function getPagingSmsTypeHandler(req, reply) {
    const data = await validateIt(req.query, PagingDto, DtoGroup.PAGING);
    const result = await getPagingSmsTypeService(data);
    reply.success(result);
}

export async function updateSmsTypeHandler(req, reply) {
    const data = await validateIt({ ...req.params, ...req.body }, SmsTypeDto, DtoGroup.UPDATE);
    const result = await updateSmsTypeService(data._id, data);
    reply.success(result);
}

export async function deleteSmsTypeHandler(req, reply) {
    const data = await validateIt(req.body, DeleteDto, DtoGroup.DELETE);
    const result = await deleteSmsTypeService(data);
    reply.success(result);
}


export async function createSmsHandler(req, reply) {
    const data = await validateIt(req.body, SmsDto, DtoGroup.CREATE);
    const result = await createSmsService(data);
    reply.success(result._id);
}

export async function getPagingSmsHandler(req, reply) {
    const data = await validateIt(req.query, PagingDto, DtoGroup.PAGING);
    const result = await getPagingSmsService(data);
    reply.success(result);
}
