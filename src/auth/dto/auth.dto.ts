import { ApiProperty } from "@nestjs/swagger"

export class AuthPayLoadDTO{
   
    @ApiProperty({example: 'email'})
    email: string

    @ApiProperty({example: 'contrasena'})
    password: string
}