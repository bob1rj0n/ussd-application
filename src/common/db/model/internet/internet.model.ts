import { modelOptions, prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { Types } from "mongoose";
import { CollectionNames } from "../../../constant/collections";
import { BaseModel } from "../base.model";
import { InternetType } from "./type/type.model";

@modelOptions({
    schemaOptions: { collection: CollectionNames.INTERNET }
})

export class Internet extends BaseModel {
    @prop({ required: true })
    name: string

    @prop({ required: true })
    price: number

    @prop({ required: true })
    duration: string

    @prop({ required: true })
    code: string

    @prop({ required: true, type: Types.ObjectId, ref: CollectionNames.INTERNET_TYPE })
    typeId: Ref<InternetType>
}

export const InternetModel = getModelForClass(Internet);
