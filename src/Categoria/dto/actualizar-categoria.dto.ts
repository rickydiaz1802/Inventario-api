import { ApiPropertyOptional } from "@nestjs/swagger"

export class ActualizarCategoriaDto{
    
    @ApiPropertyOptional({example: 'nuevo nombre'})
    nombre?: string

    @ApiPropertyOptional({example: 'Nueva descripción'})
    descripcion?: string
}