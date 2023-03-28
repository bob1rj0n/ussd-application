import fp from "fastify-plugin";
import { createSmsHandler, createSmsTypeHandler, deleteSmsTypeHandler, getPagingSmsHandler, getPagingSmsTypeHandler, updateSmsTypeHandler } from "../handler/sms.handler";

async function sms(server, opt, done) {
    server.post('/sms/type/create', createSmsTypeHandler);
    server.get('/sms/type/paging', getPagingSmsTypeHandler);
    server.put('/sms/type/:_id', updateSmsTypeHandler);
    server.delete('/sms/type/delete', deleteSmsTypeHandler);

    server.post('/sms/create', createSmsHandler);
    server.get('/sms/paging', getPagingSmsHandler);

    done();
}

export const smsPlugin = fp(sms);
