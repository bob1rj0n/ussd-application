import fp from "fastify-plugin";
import {
    createEmployeeHandler,
    getEmployeeByIdHandler,
    getEmployeeByPagingHandler,
    getMySelfHandler,
    searchEmployeeHandler,
    updateEmployeeHandler,
    updateMySelfHandler,
    updatePasswordHandler,
    loginEmployeeHandler
} from "../handler/admin.handler";

async function employee(server, opt, done) {
    server.post("/admin/create", createEmployeeHandler)  ///{ preValidation: server.authAdmin },
    server.get("/admin/:_id", { preValidation: server.authAdmin }, getEmployeeByIdHandler)
    server.get("/admin/paging", { preValidation: server.authAdmin }, getEmployeeByPagingHandler)
    server.get("/admin/myself", { preValidation: server.authAdmin }, getMySelfHandler)
    server.get("/admin/search", { preValidation: server.authAdmin }, searchEmployeeHandler)
    server.put("/admin/update/:_id", { preValidation: server.authAdmin }, updateEmployeeHandler)
    server.put("/admin/update/myself", { preValidation: server.authAdmin }, updateMySelfHandler)
    server.put("/admin/update/password", { preValidation: server.authAdmin }, updatePasswordHandler)

    server.post("/admin/login", loginEmployeeHandler)

    done()
}

export const employeePlugin = fp(employee);
