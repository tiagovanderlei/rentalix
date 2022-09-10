import { AppError } from "@errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "@modules/accounts/useCases/createUser/CreateUserUseCase";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });
  it("should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      email: "teste@gmail.com",
      password: "12345",
      name: "Teste",
      driver_license: "0000000",
    };
    await createUserUseCase.execute(user);
    const authenticationResponse = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(authenticationResponse).toHaveProperty("token");
  });

  it("shouldn't be able to authenticate a non-existent user", async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "false@email.com",
        password: "1234",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("shouldn't be able to authenticate an user with incorrect password", async () => {
    const user: ICreateUserDTO = {
      email: "teste@gmail.com",
      password: "12345",
      name: "Teste",
      driver_license: "0000000",
    };
    await createUserUseCase.execute(user);

    expect(async () => {
      await authenticateUserUseCase.execute({
        email: user.email,
        password: "123456",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
