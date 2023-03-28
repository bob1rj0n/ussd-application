import { DtoGroup } from "../../common/constant/dto.group";
import { DeleteDto } from "../../common/validation/base.dto";
import { InternetDto, InternetTypeDto } from "../../common/validation/dto/internet.dto";
import { PagingDto } from "../../common/validation/dto/paging.dto";
import { validateIt } from "../../common/validation/validate";
import { createInternetService, createInternetTypeService, deleteInternetTypeService, getPagingInternetService, getPagingInternetTypeService, updateInternetTypeService } from "../service/internet.service";

/* *********************   INTERNET_TYPES   ******************** */
export async function createInternetTypeHandler(req, reply) {
    const data = await validateIt(req.body, InternetTypeDto, DtoGroup.CREATE);
    const result = await createInternetTypeService(data);
    reply.success(result._id);
}

export async function getPagingInternetTypeHandler(req, reply) {
    const data = await validateIt(req.query, PagingDto, DtoGroup.PAGING);
    const result = await getPagingInternetTypeService(data);
    reply.success(result);
}

export async function updateInternetTypeHandler(req, reply) {
    const data = await validateIt({ ...req.params, ...req.body }, InternetTypeDto, DtoGroup.UPDATE);
    const result = await updateInternetTypeService(data._id, data);
    reply.success(result);
}

export async function deleteInternetTypeHandler(req, reply) {
    const data = await validateIt(req.body, DeleteDto, DtoGroup.DELETE);
    const result = await deleteInternetTypeService(data);
    reply.success(result);
}

/* *********************   INTERNET   ******************** */
export async function createInternetHandler(req, reply) {
    const data = await validateIt(req.body, InternetDto, DtoGroup.CREATE);
    const result = await createInternetService(data);
    reply.success(result._id);
}

export async function getPagingInternetHandler(req, reply) {
    const data = await validateIt(req.query, PagingDto, DtoGroup.PAGING);
    const result = await getPagingInternetService(data);
    reply.success(result);
}
