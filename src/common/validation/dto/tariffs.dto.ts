import { IsArray, IsEnum, IsMongoId, IsNumber, IsString } from "class-validator";
import { DtoGroup } from "../../constant/dto.group";
import { BaseDto } from "../base.dto";

export class TariffsDto extends BaseDto {
    @IsString({ groups: [DtoGroup.CREATE] })
    name: string

    @IsString({ groups: [DtoGroup.CREATE] })
    code: string
}
