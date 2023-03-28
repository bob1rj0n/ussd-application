import { Transform } from "class-transformer";
import { IsPhoneNumber, IsOptional, IsString } from "class-validator";
import { DtoGroup } from "../../constant/dto.group";
import { BaseDto } from "../base.dto";

export class UserDto extends BaseDto {
    @IsOptional({ groups: [DtoGroup.REGISTER, DtoGroup.UPDATE] })
    @IsString({ groups: [DtoGroup.REGISTER, DtoGroup.UPDATE] })
    fullName: string

    @Transform(({ value }) => value ? '+' + value.replace(/[^0-9]/g, '') : value)
    @IsPhoneNumber(null, { groups: [DtoGroup.CHECK_USER, DtoGroup.REGISTER, DtoGroup.UPDATE] })
    @IsOptional({ groups: [DtoGroup.UPDATE] })
    phoneNumber: string
}


export class OtpDto extends BaseDto {
    @Transform(({ value }) => value ? '+' + value.replace(/[^0-9]/g, '') : value)
    @IsPhoneNumber(null, { groups: [DtoGroup.CHECK_OTP] })
    phoneNumber: string

    @IsString({ groups: [DtoGroup.CHECK_OTP] })
    code: string
}
