import { inject, injectable } from "tsyringe";

import {
  ICreateUserDTO,
  IUsersRepository,
} from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    username,
    password,
    email,
    driver_licence,
  }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      username,
      password,
      email,
      driver_licence,
    });
  }
}

export { CreateUserUseCase };
