import fp from "fastify-plugin";
import { createTariffsHandler, getPagingTariffsHandler, deleteTariffsHandler } from "../handler/tariffs.handler";

async function tariffs(server, opt, done) {
    server.post('/tariffs/create', createTariffsHandler);
    server.get('/tariffs/paging', getPagingTariffsHandler);
    server.delete('/tariffs/delete', deleteTariffsHandler);

    done();
}

export const tariffsPlugin = fp(tariffs);
