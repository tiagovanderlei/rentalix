import { User } from "../entities/User";

interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  driver_licence: string;
  isAdmin?: boolean;
}

interface IUsersRepository {
  create({
    name,
    password,
    email,
    driver_licence,
  }: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
}

export { IUsersRepository, ICreateUserDTO };
