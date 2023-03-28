import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";
import { Types } from "mongoose";
import { CollectionNames } from "../../../constant/collections";
import { SmsType } from "../../../constant/enum";
import { BaseModel } from "../base.model";
import { SmsTypes } from "./type/type.model";

@modelOptions({
    schemaOptions: { collection: CollectionNames.SMS }
})

export class Sms extends BaseModel {
    @prop({ required: true })
    name: string

    @prop({ required: true })
    price: number

    @prop({ required: true })
    duration: string

    @prop({ required: true })
    code: string

    @prop({ required: true, type: Types.ObjectId, ref: CollectionNames.SMS_TYPE })
    typeId: Ref<SmsTypes>
}

export const SmsModel = getModelForClass(Sms);
