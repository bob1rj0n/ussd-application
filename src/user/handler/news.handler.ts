import { DtoGroup } from "../../common/constant/dto.group";
import { PagingDto } from "../../common/validation/dto/paging.dto";
import { validateIt } from "../../common/validation/validate";
import { getPagingNewsService } from "../service/news.service";

export async function getPagingNewsHandler(req, reply) {
    const data = await validateIt(req.query, PagingDto, DtoGroup.PAGING);
    const result = await getPagingNewsService(data);
    reply.success(result);
}
