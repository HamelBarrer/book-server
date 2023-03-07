import { PrismaClient } from '@prisma/client';
import { CreateUser } from '../interfaces/user.interface';
import { creationHash } from '../utils/hash';

export const readUser = async (userId: number) => {
  const prisma = new PrismaClient();

  const user = await prisma.user.findUnique({
    where: {
      userId,
    },
  });

  return user;
};

export const insertUser = async (user: CreateUser) => {
  const prisma = new PrismaClient();
  const password = await creationHash(user.password);

  const data = await prisma.user.create({
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password,
      avatar: user.avatar,
    },
  });

  return data;
};
