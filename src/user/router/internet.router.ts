import fp from "fastify-plugin";
import { getAllInternetTypeHandler, getInternetByTypeIdHandler, getPagingInternetHandler } from "../handler/internet.handler";

async function internet(server, opt, done) {
    server.get('/internet/type', getAllInternetTypeHandler);
    server.get('/internet/:_id', getInternetByTypeIdHandler);

    server.get('/internet/paging', getPagingInternetHandler);

    done();
}

export const internetPlugin = fp(internet);
