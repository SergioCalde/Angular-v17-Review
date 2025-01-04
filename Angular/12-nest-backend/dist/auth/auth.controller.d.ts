import { AuthService } from './auth.service';
import { CreateUserDto, LoginDto, RegisterUserDto, UpdateUserDto } from './dto';
import { LoginResponse } from './interfaces/login-response.interface';
import { User } from './entities/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createUserDto: CreateUserDto): Promise<User>;
    login(loginDto: LoginDto): Promise<LoginResponse>;
    register(registerUserDto: RegisterUserDto): Promise<LoginResponse>;
    findAll(req: Request): Promise<User[]>;
    checkToken(req: Request): LoginResponse;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
