import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { container } from "tsyringe";

import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new Error("Token missing");

  const [, token] = authHeader.split(" ");

  try {
    const { sub: userId } = verify(token, "abcde") as IPayload;
    console.log(userId);

    const usersRepository = container.resolve(UsersRepository);
    const user = await usersRepository.findById(userId);

    if (!user) throw new Error("Users does not exists");

    next();
  } catch {
    throw new Error("Invalid token");
  }
}
