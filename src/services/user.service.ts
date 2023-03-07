import { PrismaClient } from '@prisma/client';
import { CreateUser } from '../interfaces/user.interface';
import { creationHash } from '../utils/hash';

export const readUserEmail = async (email: string) => {
  const prisma = new PrismaClient();

  const data = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  return data;
};

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
