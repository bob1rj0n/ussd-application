import { NewsModel } from "../../common/db/model/news/news.model";
import { getPaging } from "../../common/service/base.service";

export async function getPagingNewsService(data) {
    return await getPaging(NewsModel, data, {}, { createdAt: -1 });
}
