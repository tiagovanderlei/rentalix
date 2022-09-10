import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";

import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    password,
    email,
    driver_license,
    id,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      password,
      email,
      driver_license,
      id,
      avatar,
    });

    await this.repository.save(user);
  }
  async findByEmail(email: string): Promise<User> {
    return this.repository.findOne({ email });
  }
  async findById(userId: string): Promise<User> {
    return this.repository.findOne(userId);
  }
}

export { UsersRepository };
