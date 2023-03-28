import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { CollectionNames } from "../../../constant/collections";
import { BaseModel } from "../base.model";

@modelOptions({
    schemaOptions: { collection: CollectionNames.TARIFFS }
})

export class Tariffs extends BaseModel {
    @prop({ required: true })
    name: string

    @prop({ required: true })
    code: string
}

export const TariffsModel = getModelForClass(Tariffs);
