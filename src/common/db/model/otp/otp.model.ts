import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";
import { CollectionNames } from "../../../constant/collections";
import { BaseModel } from "../base.model";
import { User } from "../user/user.model";

@modelOptions({
    schemaOptions:{collection:CollectionNames.OTP}
})

export class Otp extends BaseModel {
    @prop({ required: true })
    phoneNumber: string

    @prop({ required: true })
    code: string
}

export const OtpModel = getModelForClass(Otp);
