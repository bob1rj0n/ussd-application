import { NewsModel } from "../../common/db/model/news/news.model";
import { create } from "../../common/service/base.service";

export async function createNewsService(data) {
    return await create(NewsModel, data);
}
