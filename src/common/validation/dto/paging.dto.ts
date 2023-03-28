import { Transform } from "class-transformer";
import { IsNumber, IsPositive } from "class-validator";
import { DtoGroup } from "../../constant/dto.group";

export class PagingDto {
    @Transform(({ value }) => Number(value))
    @IsNumber(
        {
            allowInfinity: false,
            allowNaN: false,
            maxDecimalPlaces: 0
        },
        {
            groups: [DtoGroup.PAGING]
        }
    )
    @IsPositive({ groups: [DtoGroup.PAGING] })
    page: number
    
    @Transform(({ value }) => Number(value))
    @IsNumber(
        {
            allowInfinity: false,
            allowNaN: false,
            maxDecimalPlaces: 0
        },
        {
            groups: [DtoGroup.PAGING]
        }
    )
    @IsPositive({ groups: [DtoGroup.PAGING] })
    limit: number
}