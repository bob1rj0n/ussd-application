import fp from "fastify-plugin";
import { AdminResponse } from "../../common/db/model/admin/admin.error";
import { AdminModel } from "../../common/db/model/admin/admin.model";
import { authToken } from "../../common/middleware/authentication";
import { findByQuery } from "../../common/service/base.service";

async function autheticateAdmin(req, reply) {
    try {
        await authToken(req, reply);

        if (!req.user) throw new Error();

        const { phoneNumber } = req.user;

        const employee = await findByQuery(AdminModel, { phoneNumber: phoneNumber });
        if (!employee) throw AdminResponse.NotFound(phoneNumber);
        req.employee = employee;
    } catch (e) {
        console.log(e);
        return reply.status(401).send({
            ...e,
            code: 401,
            message: "Unauthorized",
            statusCode: 401,
        })
    }
}

async function plugin(server, options, next) {
    server.decorate("authAdmin", autheticateAdmin);
    next();
}

export const authAdminPlugin = fp(plugin);
