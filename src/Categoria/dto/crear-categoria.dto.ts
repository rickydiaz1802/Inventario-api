import { ApiProperty } from "@nestjs/swagger"

export class CrearCategoriaDto{
    
    @ApiProperty({example: 'nombre'})
    nombre: string

    @ApiProperty({example: 'descripcion'})
    descripcion?: string
}