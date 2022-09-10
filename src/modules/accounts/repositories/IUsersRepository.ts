import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/entities/User";

interface IUsersRepository {
  create({
    name,
    password,
    email,
    driver_license,
    id,
  }: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(userId: string): Promise<User>;
}

export { IUsersRepository };
