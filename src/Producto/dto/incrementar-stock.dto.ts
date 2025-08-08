import { ApiProperty } from "@nestjs/swagger";

export class incrementarStock{
    @ApiProperty({example: 0})
    cantidad: number
}