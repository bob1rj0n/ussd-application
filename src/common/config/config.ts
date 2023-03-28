import dotenv from "dotenv";
import path from "path"

dotenv.config({
    path: path.resolve(__dirname, "../../../.env")
})
export const ENV = {
    ADMIN_PORT: parseInt(process.env.ADMIN_PORT) || 7770,
    USER_PORT: parseInt(process.env.USER_PORT) || 8888,
    DB_URL: process.env.DB_URL || "mongodb://127.0.0.1:27017/NewProject_1",
    HOST: process.env.HOST || "0.0.0.0",
    TOKEN_KEY: process.env.TOKEN_KEY || "key",
}
