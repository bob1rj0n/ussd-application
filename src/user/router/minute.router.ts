import fp from "fastify-plugin";
import { getAllMinuteTypeHandler, getMinuteByTypeIdHandler, getPagingMinutesHandler } from "../handler/minute.handler";

async function minute(server, opt, done) {
    server.get('/minute/type', getAllMinuteTypeHandler);
    server.get('/minute/:_id', getMinuteByTypeIdHandler);

    server.get('/minute/paging', getPagingMinutesHandler);

    done();
}

export const minutePlugin = fp(minute);
