import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { CollectionNames } from "../../../../constant/collections";
import { BaseModel } from "../../base.model";

@modelOptions({
    schemaOptions: { collection: CollectionNames.SMS_TYPE }
})

export class SmsTypes extends BaseModel {
    @prop({ required: true })
    name: string
}

export const SmsTypesModel = getModelForClass(SmsTypes);
