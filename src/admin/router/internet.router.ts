import fp from "fastify-plugin";
import {
    createInternetHandler,
    createInternetTypeHandler,
    deleteInternetTypeHandler,
    getPagingInternetHandler,
    getPagingInternetTypeHandler,
    updateInternetTypeHandler
} from "../handler/internet.handler";

async function internet(server, opt, done) {
    server.post('/internet/type/create', createInternetTypeHandler);
    server.get('/internet/type/paging', getPagingInternetTypeHandler);
    server.put('/internet/type/:_id', updateInternetTypeHandler);
    server.delete('/internet/type/delete', deleteInternetTypeHandler);

    server.post('/internet/create', createInternetHandler);
    server.get('/internet/paging', getPagingInternetHandler);

    done();
}

export const internetPlugin = fp(internet);
