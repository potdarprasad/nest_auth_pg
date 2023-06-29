import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from '@database';

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository
    ) { }

    async create(createUserDto: CreateUserDto) {
        const { firstName, lastName, mobile, email, password } = createUserDto;
        const User = await this.userRepository.findOneBy({ email: createUserDto.email });
        if (User) {
            return 'User With This Email Already Exists';
        }
        const user = await this.userRepository.create({ firstName, lastName, email, password });
        await this.userRepository.save(user);

        return 'User Created Successfully';
    }

    async findAll() {
        return this.userRepository.findAndCount();
    }

    async findOne(id: string) {
        return this.userRepository.findOneBy({ id });
    }

    async update(id: string, updateUserDto: UpdateUserDto) {

        await this.userRepository.update({ id }, updateUserDto);
        return 'User updated successfully';
    }

    async remove(id: string) {
        await this.userRepository.delete(id);
        return 'User Deleted Successfully';
    }
}
