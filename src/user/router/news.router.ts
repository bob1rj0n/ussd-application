import fp from "fastify-plugin";
import { getPagingNewsHandler } from "../handler/news.handler";

async function news(server, opt, done) {
    server.get('/news/paging', getPagingNewsHandler);

    done();
}

export const newsPlugin = fp(news);
