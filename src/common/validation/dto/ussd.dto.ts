import { IsArray, IsEnum, IsMongoId, IsNumber, IsString } from "class-validator";
import { DtoGroup } from "../../constant/dto.group";
import { BaseDto } from "../base.dto";

export class UssdDto extends BaseDto {
    @IsString({ groups: [DtoGroup.CREATE] })
    name: string

    @IsString({ groups: [DtoGroup.CREATE] })
    code: string
}

export class UssdDeleteDto {
    @IsArray({ groups: [DtoGroup.DELETE] })
    @IsMongoId({ groups: [DtoGroup.DELETE], each: true })
    _ids: string
}
