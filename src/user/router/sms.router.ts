import fp from "fastify-plugin";
import { getAllSmsTypeHandler, getPagingSmsHandler, getSmsByTypeIdHandler } from "../handler/sms.handler";

async function sms(server, opt, done) {
    server.get('/sms/type', getAllSmsTypeHandler);
    server.get('/sms/:_id', getSmsByTypeIdHandler);

    server.get('/sms/paging', getPagingSmsHandler);

    done();
}

export const smsPlugin = fp(sms);
