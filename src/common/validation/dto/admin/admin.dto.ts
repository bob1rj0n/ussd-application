import { Transform } from "class-transformer";
import { IsPhoneNumber, IsOptional, IsString, IsMongoId, IsDateString, IsBoolean, IsEmail } from "class-validator";
import { DtoGroup } from "../../../constant/dto.group";
import { BaseDto } from "../../base.dto";

export class AdminDto extends BaseDto {
    @Transform(({ value }) => value ? '+' + value.replace(/[^0-9]/g, '') : value)
    @IsPhoneNumber(null, { groups: [DtoGroup.CREATE, DtoGroup.UPDATE, DtoGroup.LOGIN] })
    @IsOptional({ groups: [DtoGroup.UPDATE] })
    phoneNumber: string

    @IsOptional({ groups: [DtoGroup.UPDATE] })
    @IsString({ groups: [DtoGroup.CREATE, DtoGroup.UPDATE] })
    fullName: string

    @IsOptional({ groups: [DtoGroup.CREATE] })
    @IsString({ groups: [DtoGroup.CREATE] })
    telegramUsername: string

    @IsString({ groups: [DtoGroup.CREATE, DtoGroup.LOGIN] })
    password: string
}

export class AdminChangePasswordDto extends BaseDto {
    @IsString({ groups: [DtoGroup.CHANGE_PASSWORD] })
    currentPassword: string

    @IsString({ groups: [DtoGroup.CHANGE_PASSWORD] })
    newPassword: string
}
