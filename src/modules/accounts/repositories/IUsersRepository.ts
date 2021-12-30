interface ICreateUserDTO {
  name: string;
  username: string;
  password: string;
  email: string;
  driver_licence: string;
  isAdmin?: boolean;
}

interface IUsersRepository {
  create({
    name,
    username,
    password,
    email,
    driver_licence,
  }: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository, ICreateUserDTO };
