import { DtoGroup } from "../../common/constant/dto.group";
import { PagingDto } from "../../common/validation/dto/paging.dto";
import { validateIt } from "../../common/validation/validate";
import { getAllTariffsService, getPagingTariffsService } from "../service/tariffs.service";

export async function getPagingTariffsHandler(req, reply) {
    const data = await validateIt(req.query, PagingDto, DtoGroup.PAGING);
    const result = await getPagingTariffsService(data);
    reply.success(result);
}

export async function getAllTariffsHandler(req, reply) {
    const result = await getAllTariffsService();
    reply.success(result);
}
