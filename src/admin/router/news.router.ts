import fp from "fastify-plugin";
import { uploadNewsImageHandler } from "../handler/news.handler";

async function news(server, opt, done) {
    server.post('/news/upload', uploadNewsImageHandler);

    done()
}

export const newsPlugin = fp(news);