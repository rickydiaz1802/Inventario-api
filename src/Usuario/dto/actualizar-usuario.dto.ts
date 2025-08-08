import { ApiPropertyOptional } from "@nestjs/swagger"

export class ActualizarUsuarioDto{
    @ApiPropertyOptional({example: "nuevo nombre (Opcional)"})
    nombre?: string

    @ApiPropertyOptional({example: "nuevo email (Opcional)"})
    email?: string

    @ApiPropertyOptional({example: "Nueva contraseña (Opcional)"})
    password?: string
}