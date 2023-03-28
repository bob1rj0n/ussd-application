import { DtoGroup } from "../../common/constant/dto.group";
import { PagingDto } from "../../common/validation/dto/paging.dto";
import { UssdDeleteDto, UssdDto } from "../../common/validation/dto/ussd.dto";
import { validateIt } from "../../common/validation/validate";
import { createUssdService, deleteUssdService, getPagingUssdService } from "../service/ussd.service";

export async function createUssdHandler(req, reply) {
    const data = await validateIt(req.body, UssdDto, DtoGroup.CREATE);
    const result = await createUssdService(data);
    reply.success(result._id);
}

export async function getPagingUssdHandler(req, reply) {
    const data = await validateIt(req.query, PagingDto, DtoGroup.PAGING);
    const result = await getPagingUssdService(data);
    reply.success(result);
}


export async function deleteUssdHandler(req, reply) {
    const data = await validateIt(req.body, UssdDeleteDto, DtoGroup.DELETE);
    const result = await deleteUssdService(data);
    reply.success(result);
}
