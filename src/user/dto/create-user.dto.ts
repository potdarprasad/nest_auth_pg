import { IsEmail, IsNotEmpty, IsPhoneNumber } from "class-validator";


export class CreateUserDto {
    @IsNotEmpty({ message:'First Name is required' })
    firstName: string;

    @IsNotEmpty({ message: 'Last Name is required' })
    lastName: string;

    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail()
    email: string;

    @IsNotEmpty({ message: 'Mobile is required' })
    @IsPhoneNumber('IN', {message: "Please enter valid phone number"})
    mobile: string;
    
    @IsNotEmpty({ message: 'Password is required' })
    password: string;
}