import { ApiProperty } from "@nestjs/swagger"

export class CrearProductoDto{

    @ApiProperty({example: 'nombre'})
    nombre: string

    @ApiProperty({example: 'descripción'})
    descripcion?: string

    @ApiProperty({example: 'precio'})
    precio: number

    @ApiProperty({example: 'stock'})
    stock: number

    @ApiProperty({example: 'categoría ID'})
    categoria_id: number
}