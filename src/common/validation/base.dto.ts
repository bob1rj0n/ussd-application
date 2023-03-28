import { IsArray, IsMongoId, IsOptional } from "class-validator";
import { DtoGroup } from "../constant/dto.group";

export class BaseDto {
    @IsOptional({ groups: [DtoGroup.UPDATE] })
    @IsMongoId({
        groups: [
            DtoGroup.GET_BY_ID,
            DtoGroup.UPDATE,
            DtoGroup.DELETE,
            DtoGroup.ACTIVATE
        ]
    })
    _id: string
}


export class DeleteDto {
    @IsArray({ groups: [DtoGroup.DELETE] })
    @IsMongoId({ groups: [DtoGroup.DELETE], each: true })
    _ids: string
}
