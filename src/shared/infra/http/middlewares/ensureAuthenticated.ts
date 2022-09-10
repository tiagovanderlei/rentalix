import { UsersRepository } from "@modules/accounts/infra/repositories/UsersRepository";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new AppError("Token missing", 401);

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, "abcde") as IPayload;

    const usersRepository = container.resolve(UsersRepository);
    const user = await usersRepository.findById(user_id);

    if (!user) throw new AppError("Users does not exists", 401);

    request.user = { id: user_id };

    next();
  } catch {
    throw new AppError("Invalid token", 401);
  }
}
