import { ApiProperty } from "@nestjs/swagger";

export class reducirStock{
    @ApiProperty({example: 0})
    cantidad: number
}