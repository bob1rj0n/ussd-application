import fp from "fastify-plugin";
import { getPagingUssdHandler } from "../handler/ussd.handler";

async function ussd(server, opt, done) {
    server.get('/ussd/paging', getPagingUssdHandler);

    done();
}

export const ussdPlugin = fp(ussd);
