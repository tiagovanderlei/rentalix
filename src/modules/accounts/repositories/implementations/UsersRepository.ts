import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    password,
    email,
    driver_licence,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      password,
      email,
      driver_licence,
    });

    await this.repository.save(user);
  }
  findByEmail(email: string): Promise<User> {
    return this.repository.findOne({ email });
  }
  findById(userId: string): Promise<User> {
    return this.repository.findOne(userId);
  }
}

export { UsersRepository };
