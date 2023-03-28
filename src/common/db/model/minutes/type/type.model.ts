import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { CollectionNames } from "../../../../constant/collections";
import { BaseModel } from "../../base.model";

@modelOptions({
    schemaOptions: { collection: CollectionNames.MINUTE_TYPE }
})

export class MinuteTypes extends BaseModel {
    @prop({ required: true })
    name: string
}

export const MinuteTypesModel = getModelForClass(MinuteTypes);
