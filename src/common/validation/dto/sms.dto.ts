import { IsEnum, IsMongoId, IsNumber, IsString } from "class-validator";
import { DtoGroup } from "../../constant/dto.group";
import { SmsType } from "../../constant/enum";
import { BaseDto } from "../base.dto";

export class SmsTypeDto extends BaseDto {
    @IsString({ groups: [DtoGroup.CREATE, DtoGroup.UPDATE] })
    name: string
}

export class SmsDto extends BaseDto {
    @IsString({ groups: [DtoGroup.CREATE] })
    name: string

    @IsNumber({ allowInfinity: false, allowNaN: false }, { groups: [DtoGroup.CREATE] })
    price: number

    @IsString({ groups: [DtoGroup.CREATE] })
    duration: string

    @IsString({ groups: [DtoGroup.CREATE] })
    code: string

    @IsMongoId({ groups: [DtoGroup.CREATE] })
    typeId: string
}
