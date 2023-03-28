import { getModelForClass, index, modelOptions, prop, Ref } from "@typegoose/typegoose";
import { CollectionNames } from "../../../constant/collections";
import { BaseModel } from "../base.model";

@modelOptions({
    schemaOptions: { collection: CollectionNames.ADMIN }
})

@index(
    {
        phoneNumber: 1
    },
    {
        unique: true,
        background: true,
        name: "phoneNumber",
        partialFilterExpression: { isDeleted: { $eq: false } }
    }
)

export class Admin extends BaseModel {
    @prop({ required: true })
    phoneNumber: string

    @prop({ required: true })
    fullName: string

    @prop({ default: null })
    telegramUsername: string

    @prop({ required: true, trim: true })
    password: string
}

export const AdminModel = getModelForClass(Admin)
