import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    @InjectRepository(User) //Inyectamos la entidad de usuario
    private UserRepository: Repository<User> //TypeORM utiliza repositorios para interactuar con la base de datos  

    public async create(createUserDto: CreateUserDto) {
        try {
            const newUser = this.UserRepository.create({
            Email: createUserDto.Email,
            Contraseña: createUserDto.Contraseña
        });
        
        await this.UserRepository.save(newUser);
        return {
            statusCode: 200,
            msg: 'Usuario creado con éxito',
        };
        } catch (error) {
            throw new BadRequestException(error.message);
        }
}

public async findAll() {
    var registros: any
    try{
        registros = await this.UserRepository.find();
        return registros ;
    }
    catch(error){
        return new BadRequestException(error);
    }
}
}