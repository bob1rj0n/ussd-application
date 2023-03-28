import { Types } from "mongoose";
import { CollectionNames } from "../../common/constant/collections";
import { AdminResponse } from "../../common/db/model/admin/admin.error";
import { AdminModel } from "../../common/db/model/admin/admin.model";
import { aggregate, create, findById, findByQuery, getPaging, updateOneById } from "../../common/service/base.service";
import { AdminDto } from "../../common/validation/dto/admin/admin.dto";
import { PagingDto } from "../../common/validation/dto/paging.dto";


export async function createEmployeeService(data: AdminDto) {
    try {
        return await create(AdminModel, data);
    } catch (e) {
        if (e.code == 11000)
            throw AdminResponse.AlreadyExists(Object.keys(e.keyPattern));
        else throw AdminResponse.UnknownError(e);
    }
}

export async function getEmployeeByPagingService(dto: PagingDto) {
    return await getPaging(AdminModel, dto);
}

export async function getEmployeeByIdService(_id) {
    const employee = await findById(AdminModel, _id);
    if (!employee) throw AdminResponse.NotFound(_id);
    return employee;
}

export async function getMyselfService(id) {
    const employee = await getEmployeeByIdService(id)
    return employee;
}

export async function loginEmployeeService(data) {
    const employee = await getEmployeeByPhoneNumberService(data.phoneNumber)
    if (!employee) throw AdminResponse.NotFound(data.phoneNumber)
    if (data.password != employee.password) throw AdminResponse.InvalidPassword(data.password)
    return employee;
}

export async function getEmployeeByPhoneNumberService(phoneNumber) {
    return await findByQuery(AdminModel, { phoneNumber })
}

export async function getPagingLogsService(data, investorId) {
    const $match = {
        $match: {
            _id: new Types.ObjectId(investorId)
        }
    }
    const $unwind = {
        $unwind: {
            path: "$logs"
        }
    }
    const $skip = {
        $skip: data.limit * (data.page - 1)
    }
    const $limit = {
        $limit: data.limit
    }
    const $project = {
        $project: {
            logs: 1
        }
    }
    const $pipeline = [
        $match,
        $unwind,
        $skip,
        $limit,
        $project,
    ]
    return await aggregate(AdminModel, $pipeline)
}

export async function updateEmployeeService(_id, data) {
    try {
        return await updateOneById(AdminModel, _id, data);
    } catch (e) {
        if (e.code == 11000)
            throw AdminResponse.AlreadyExists(Object.keys(e.keyPattern));
        else throw AdminResponse.UnknownError(e);
    }
}

export async function updatePasswordService(id, data) {
    const emp = await getEmployeeByIdService(id)
    if (data.currentPassword !== emp.password) {
        throw AdminResponse.InvalidPassword()
    }
    return await updateEmployeeService(data._id, { password: data.newPassword })
}

export async function searchEmployeeService(text) {
    const query = {
        $match: {
            $or: [
                {
                    fullName: {
                        $regex: text,
                        $options: "i"
                    }
                }
            ]
        }
    }
    const emp = await aggregate(AdminModel, [query])
    if (!emp.length) throw AdminResponse.NotFound({ fullName: text })
    const result = {
        total: emp.length,
        data: emp
    }
    return result;
}
