import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { CollectionNames } from "../../../constant/collections";
import { BaseModel } from "../base.model";

@modelOptions({
    schemaOptions: { collection: CollectionNames.USSD }
})

export class Ussd extends BaseModel {
    @prop({ required: true })
    name: string

    @prop({ required: true })
    code: string
}

export const UssdModel = getModelForClass(Ussd);
