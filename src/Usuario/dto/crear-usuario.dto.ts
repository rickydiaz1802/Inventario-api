import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CrearUsuarioDto {

    @ApiProperty({example: 'Nombre', description: 'Nombre del usuario',
    }) nombre: string;

    @ApiProperty({example: 'email', description: 'Correo electrónico del usuario',
    }) email: string;

    @ApiProperty({example: 'contraseña',description: 'Contraseña del usuario',
    })password: string;

    @ApiPropertyOptional({example: 'CLIENTE', description: 'Tipo de usuario',
    }) tipo?: string;
}