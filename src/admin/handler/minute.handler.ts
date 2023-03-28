import { DtoGroup } from "../../common/constant/dto.group";
import { DeleteDto } from "../../common/validation/base.dto";
import { MinuteDto, MinuteTypeDto } from "../../common/validation/dto/minutes.dto";
import { PagingDto } from "../../common/validation/dto/paging.dto";
import { validateIt } from "../../common/validation/validate";
import { createMinuteService, createMinuteTypeService, deleteMinuteTypeService, getPagingMinutesService, getPagingMinuteTypeService, updateMinuteTypeService } from "../service/minute.service";


/* *********************   MINUTE_TYPES   ******************** */
export async function createMinuteTypeHandler(req, reply) {
    const data = await validateIt(req.body, MinuteTypeDto, DtoGroup.CREATE);
    const result = await createMinuteTypeService(data);
    reply.success(result._id);
}

export async function getPagingMinuteTypeHandler(req, reply) {
    const data = await validateIt(req.query, PagingDto, DtoGroup.PAGING);
    const result = await getPagingMinuteTypeService(data);
    reply.success(result);
}

export async function updateMinuteTypeHandler(req, reply) {
    const data = await validateIt({ ...req.params, ...req.body }, MinuteTypeDto, DtoGroup.UPDATE);
    const result = await updateMinuteTypeService(data._id, data);
    reply.success(result);
}

export async function deleteMinuteTypeHandler(req, reply) {
    const data = await validateIt(req.body, DeleteDto, DtoGroup.DELETE);
    const result = await deleteMinuteTypeService(data);
    reply.success(result);
}


/* *********************   MINUTE   ******************** */
export async function createMinuteHandler(req, reply) {
    const data = await validateIt(req.body, MinuteDto, DtoGroup.CREATE);
    const result = await createMinuteService(data);
    reply.success(result._id);
}

export async function getPagingMinutesHandler(req, reply) {
    const data = await validateIt(req.query, PagingDto, DtoGroup.PAGING);
    const result = await getPagingMinutesService(data);
    reply.success(result);
}
