import fastifyCors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import fastify from "fastify";
import fastifyFileUpload from "fastify-file-upload";
import { ENV } from "../common/config/config";
import { connectDb } from "../common/db/connector";
import { replyPlugin } from "../common/decorator/reply";
import { employeePlugin } from "./router/admin.router";
import { internetPlugin } from "./router/internet.router";
import { minutePlugin } from "./router/minute.router";
import { newsPlugin } from "./router/news.router";
import { smsPlugin } from "./router/sms.router";
import { tariffsPlugin } from "./router/tariffs.router";
import { ussdPlugin } from "./router/ussd.router";
import path from "path";
import { authPlugin } from "../common/middleware/authentication";
import { authAdminPlugin } from "./middleware/middleware";

const server = fastify();
server.register(fastifyCors);
server.register(fastifyFileUpload);
server.register(fastifyStatic, {
    root: path.join(__dirname, "../../uploads"),
    prefix: "/public/uploads"
})

server.register(replyPlugin);
server.register(authPlugin);
server.register(authAdminPlugin);

server.register(employeePlugin);
server.register(internetPlugin);
server.register(smsPlugin);
server.register(minutePlugin);
server.register(ussdPlugin);
server.register(tariffsPlugin);
server.register(newsPlugin);

async function start() {
    try {
        await connectDb()

        server.listen({ port: ENV.ADMIN_PORT, host: ENV.HOST })
        console.log("Server ADMIN running....")
        console.log("URL : http://localhost:" + ENV.ADMIN_PORT)
    } catch (e) {
        console.log("Error to running server____")
        console.log(e)
    }
}

start();
