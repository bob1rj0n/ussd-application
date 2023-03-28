import fp from "fastify-plugin";
import { checkOtpHandler, getMySelfHandler, registerUserHandler, updateUserHandler } from "../handler/user.handler";

async function user(server, opt, done) {
    server.post('/user/register', registerUserHandler);
    server.post('/check/otp', checkOtpHandler);
    server.get('/user', { preValidation: server.authUser }, getMySelfHandler);
    server.put('/user', { preValidation: server.authUser }, updateUserHandler);

    done();
}

export const userPlugin = fp(user);
