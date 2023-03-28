import fp from "fastify-plugin";
import { createUssdHandler, deleteUssdHandler, getPagingUssdHandler } from "../handler/ussd.handler";

async function ussd(server, opt, done) {
    server.post('/ussd/create', createUssdHandler);
    server.get('/ussd/paging', getPagingUssdHandler);
    server.delete('/ussd/delete', deleteUssdHandler);

    done();
}

export const ussdPlugin = fp(ussd);
