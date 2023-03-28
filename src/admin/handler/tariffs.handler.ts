import { DtoGroup } from "../../common/constant/dto.group";
import { DeleteDto } from "../../common/validation/base.dto";
import { PagingDto } from "../../common/validation/dto/paging.dto";
import { TariffsDto } from "../../common/validation/dto/tariffs.dto";
import { validateIt } from "../../common/validation/validate";
import { createTariffsService, deleteTariffsService, getPagingTariffsService } from "../service/tariffs.service";

export async function createTariffsHandler(req, reply) {
    const data = await validateIt(req.body, TariffsDto, DtoGroup.CREATE);
    const result = await createTariffsService(data);
    reply.success(result._id);
}

export async function getPagingTariffsHandler(req, reply) {
    const data = await validateIt(req.query, PagingDto, DtoGroup.PAGING);
    const result = await getPagingTariffsService(data);
    reply.success(result);
}


export async function deleteTariffsHandler(req, reply) {
    const data = await validateIt(req.body, DeleteDto, DtoGroup.DELETE);
    const result = await deleteTariffsService(data);
    reply.success(result);
}
