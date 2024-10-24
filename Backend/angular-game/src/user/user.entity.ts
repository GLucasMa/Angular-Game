import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";

@Entity('User') // Nombre de la tabla en la base de datos
export class User {    
    @PrimaryGeneratedColumn('increment')
    Id: number;

    @Column({ type: 'varchar', nullable: false, unique: true })
    Email: string;

    @Column({ type: 'varchar', nullable: false })
    Contraseña: string;
}
