import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { CreateUserDto, LoginDto, RegisterUserDto, UpdateUserDto } from './dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { User } from './entities/user.entity';
import { LoginResponse } from './interfaces/login-response.interface';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    create(createUserDto: CreateUserDto): Promise<User>;
    register(registerUserDto: RegisterUserDto): Promise<LoginResponse>;
    login(loginDto: LoginDto): Promise<LoginResponse>;
    findAll(): Promise<User[]>;
    findUserById(id: string): Promise<User>;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
    getJwtToken(payload: JwtPayload): string;
}
