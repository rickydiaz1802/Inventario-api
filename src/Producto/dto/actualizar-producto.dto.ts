import { ApiPropertyOptional } from "@nestjs/swagger"

export class ActualizarProductoDto{
    @ApiPropertyOptional({example: 'nuevo nombre (Opcional)'})
    nombre?: string

    @ApiPropertyOptional({example: "Nueva descripción (Opcional)"})
    descripcion?: string

    @ApiPropertyOptional({example: "Nuevo precio (Opcional)"})
    precio?: number

    @ApiPropertyOptional({example: "Nuevo stock (Opcional)"})
    stock?: number

    @ApiPropertyOptional({example: "Nueva categoría ID (Opcional)"})
    categoria_id?: number
}