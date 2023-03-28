import { getModelForClass, index, modelOptions, prop } from "@typegoose/typegoose";
import { CollectionNames } from "../../../../constant/collections";
import { BaseModel } from "../../base.model";

@modelOptions({
    schemaOptions: { collection: CollectionNames.INTERNET_TYPE }
})
@index(
    {
        name: 1
    },
    {
        unique: true,
        background: true,
        name: "type",
        partialFilterExpression: { isDeleted: { $eq: false } }
    }
)

export class InternetType extends BaseModel {
    @prop({ required: true })
    name: string
}

export const InternetTypeModel = getModelForClass(InternetType);
