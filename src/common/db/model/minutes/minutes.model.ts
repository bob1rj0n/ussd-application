import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";
import { Types } from "mongoose";
import { CollectionNames } from "../../../constant/collections";
import { MinutesType } from "../../../constant/enum";
import { BaseModel } from "../base.model";
import { MinuteTypes } from "./type/type.model";

@modelOptions({
    schemaOptions: { collection: CollectionNames.MINUTE }
})

export class Minutes extends BaseModel {
    @prop({ required: true })
    name: string

    @prop({ required: true })
    price: number

    @prop({ required: true })
    duration: string

    @prop({ required: true })
    code: string

    @prop({ required: true, type: Types.ObjectId, ref: CollectionNames.MINUTE_TYPE })
    typeId: Ref<MinuteTypes>
}

export const MinutesModel = getModelForClass(Minutes);
