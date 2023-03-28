import { DtoGroup } from "../../common/constant/dto.group";
import { PagingDto } from "../../common/validation/dto/paging.dto";
import { validateIt } from "../../common/validation/validate";
import { getPagingUssdService } from "../service/ussd.service";

export async function getPagingUssdHandler(req, reply) {
    const data = await validateIt(req.query, PagingDto, DtoGroup.PAGING);
    const result = await getPagingUssdService(data);
    reply.success(result);
}
