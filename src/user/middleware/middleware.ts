import fp from "fastify-plugin";
import { AdminResponse } from "../../common/db/model/admin/admin.error";
import { UserResponse } from "../../common/db/model/user/user.error";
import { UserModel } from "../../common/db/model/user/user.model";
import { authToken } from "../../common/middleware/authentication";
import { findByQuery } from "../../common/service/base.service";

async function authenticateUser(req, reply) {
    try {
        await authToken(req, reply);

        if (!req.user) throw new Error();

        const { phoneNumber } = req.user;

        const user = await findByQuery(UserModel, { phoneNumber: phoneNumber });
        if (!user) throw UserResponse.NotFound(phoneNumber);
        req.user = user;
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
    server.decorate("authUser", authenticateUser);
    next();
}

export const authUserPlugin = fp(plugin);
