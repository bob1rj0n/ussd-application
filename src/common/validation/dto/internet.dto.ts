import { IsArray, IsEnum, IsMongoId, IsNumber, IsString } from "class-validator";
import { DtoGroup } from "../../constant/dto.group";
import { InternetType, SmsType } from "../../constant/enum";
import { BaseDto } from "../base.dto";


export class InternetTypeDto extends BaseDto {
    @IsString({ groups: [DtoGroup.CREATE, DtoGroup.UPDATE] })
    name: string
}

export class InternetDto extends BaseDto {
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
