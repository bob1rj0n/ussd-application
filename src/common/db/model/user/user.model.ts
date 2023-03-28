import { getModelForClass, index, modelOptions, prop } from "@typegoose/typegoose";
import { CollectionNames } from "../../../constant/collections";
import { BaseModel } from "../base.model";

@modelOptions({
    schemaOptions: { collection: CollectionNames.USER }
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

export class User extends BaseModel {
    @prop({ default: "" })
    fullName: string

    @prop({ required: true })
    phoneNumber: string
}

export const UserModel = getModelForClass(User);
