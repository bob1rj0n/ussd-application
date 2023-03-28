import fastifyCors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import fastify from "fastify";
import path from "path";
import { ENV } from "../common/config/config";
import { connectDb } from "../common/db/connector";
import { replyPlugin } from "../common/decorator/reply";
import { authPlugin } from "../common/middleware/authentication";
import { authUserPlugin } from "./middleware/middleware";
import { internetPlugin } from "./router/internet.router";
import { minutePlugin } from "./router/minute.router";
import { newsPlugin } from "./router/news.router";
import { smsPlugin } from "./router/sms.router";
import { tariffsPlugin } from "./router/tariffs.router";
import { userPlugin } from "./router/user.router";
import { ussdPlugin } from "./router/ussd.router";

const server = fastify();

server.register(fastifyCors);

server.register(fastifyStatic, {
    root: path.join(__dirname, "../../uploads"),
    prefix: "/public/uploads"
})

server.register(authPlugin);
server.register(authUserPlugin);

server.register(replyPlugin);

server.register(userPlugin);
server.register(minutePlugin);
server.register(internetPlugin);
server.register(smsPlugin);
server.register(ussdPlugin);
server.register(tariffsPlugin);
server.register(newsPlugin);

async function start() {
    try {
        await connectDb();

        server.listen({ port: ENV.USER_PORT, host: ENV.HOST });
        console.log("Server USER running...");
        console.log("URL : http://localhost:" + ENV.USER_PORT);
    } catch (error) {
        console.log("Error : ", error);
    }
}

start();
