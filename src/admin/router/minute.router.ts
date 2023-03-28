import fp from "fastify-plugin";
import {
    createMinuteHandler,
    createMinuteTypeHandler,
    deleteMinuteTypeHandler,
    getPagingMinutesHandler,
    getPagingMinuteTypeHandler,
    updateMinuteTypeHandler
} from "../handler/minute.handler";

async function minute(server, opt, done) {
    server.post('/minute/type/create', createMinuteTypeHandler);
    server.get('/minute/type/paging', getPagingMinuteTypeHandler);
    server.put('/minute/type/:_id', updateMinuteTypeHandler);
    server.delete('/minute/type/delete', deleteMinuteTypeHandler);

    server.post('/minute/create', createMinuteHandler);
    server.get('/minute/paging', getPagingMinutesHandler);

    done();
}

export const minutePlugin = fp(minute);
