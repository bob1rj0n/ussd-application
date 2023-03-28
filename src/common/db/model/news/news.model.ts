import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { CollectionNames } from "../../../constant/collections";
import { BaseModel } from "../base.model";

@modelOptions({
    schemaOptions: { collection: CollectionNames.NEWS }
})

export class News extends BaseModel {
    @prop({ required: true })
    imgUrl: string
}

export const NewsModel = getModelForClass(News);
