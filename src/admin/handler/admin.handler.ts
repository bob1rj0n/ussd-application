import { DtoGroup } from "../../common/constant/dto.group"
import { jwtSign } from "../../common/middleware/authentication"
import { AdminChangePasswordDto, AdminDto } from "../../common/validation/dto/admin/admin.dto"
import { PagingDto } from "../../common/validation/dto/paging.dto"
import { validateIt } from "../../common/validation/validate"
import { createEmployeeService, getEmployeeByIdService, getEmployeeByPagingService, getMyselfService, loginEmployeeService, searchEmployeeService, updateEmployeeService, updatePasswordService } from "../service/admin.service"

export async function createEmployeeHandler(req, reply) {
    const data = await validateIt(req.body, AdminDto, DtoGroup.CREATE)
    const result = await createEmployeeService(data)
    reply.success(result._id)
}

export async function getEmployeeByPagingHandler(req, reply) {
    const data = await validateIt(req.query, PagingDto, DtoGroup.PAGING)
    const result = await getEmployeeByPagingService(data)
    reply.success(result)
}

export async function getEmployeeByIdHandler(req, reply) {
    const data = await validateIt(req.params, AdminDto, DtoGroup.GET_BY_ID)
    const result = await getEmployeeByIdService(data._id)
    reply.success(result)
}

export async function updateEmployeeHandler(req, reply) {
    const data = await validateIt({ ...req.params, ...req.body }, AdminDto, DtoGroup.UPDATE)
    await getEmployeeByIdService(data._id)
    const result = await updateEmployeeService(data._id, data)
    reply.success()
}

export async function getMySelfHandler(req, reply) {
    const id = (req.employee._id).toString()
    const emp = await getMyselfService(id)
    reply.success(emp)
}

export async function updateMySelfHandler(req, reply) {
    req.body._id = (req.employee._id).toString()
    const data = await validateIt(req.body, AdminDto, DtoGroup.UPDATE)
    const emp = await getEmployeeByIdService(data._id)
    const result = await updateEmployeeService(data._id, data)
    reply.success()
}

export async function updatePasswordHandler(req, reply) {
    const adminId = (req.employee._id).toString()
    const data = await validateIt(req.body, AdminChangePasswordDto, DtoGroup.CHANGE_PASSWORD)
    const result = await updatePasswordService(adminId, data);
    reply.success(result)
}

export async function searchEmployeeHandler(req, reply) {
    const text = req.query.q;
    const result = await searchEmployeeService(text)
    reply.success(result)
}

///login
export async function loginEmployeeHandler(req, reply) {
    const data = await validateIt(req.body, AdminDto, DtoGroup.LOGIN)
    const employee = await loginEmployeeService(data)
    const token: any = await jwtSign(req, { phoneNumber: employee.phoneNumber })
    const result: any = employee.toObject()
    result.token = token
    reply.success(result)
}
