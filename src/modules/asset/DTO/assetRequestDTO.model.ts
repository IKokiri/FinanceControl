import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export class AssetRequestDTO {


    @IsNotEmpty({message: 'Campo nome nao pode ser vazio'})
    @ApiProperty({ example: 'FI Imobiliario FII BTG Pactual Fundo de Fundos', description: 'Name Asset' })
    name: string;

    @IsNotEmpty({message: 'Campo sigla nao pode ser vazio'})
    @ApiProperty({ example: 'BCFF11', description: 'Abbreviation Asset' })
    abbreviation: string;

    @ApiProperty({ example: 'Papel', description: 'Sector Asset' })
    sector: string;


    @ApiProperty({ example: 'Fundo de fundos', description: 'Subsector Asset' })
    subsector: string

    constructor( name, abbreviation, sector, subsector) {
        this.name = name;
        this.abbreviation = abbreviation;
        this.sector = sector;
        this.subsector = subsector;
    }

}
