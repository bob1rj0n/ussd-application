import fp from "fastify-plugin";
import { getAllTariffsHandler, getPagingTariffsHandler } from "../handler/tariffs.handler";

async function tariffs(server, opt, done) {
    server.get('/tariffs/paging', getPagingTariffsHandler);
    server.get('/tariffs', getAllTariffsHandler);

    done();
}

export const tariffsPlugin = fp(tariffs);
