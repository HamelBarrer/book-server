import { PrismaClient } from '@prisma/client';
import { CategoryBook } from '../interfaces/categoryBook.interface';

export const readCategoryBook = async (categoryBookId: number) => {
  const prisma = new PrismaClient();

  const data = await prisma.categoryBook.findUnique({
    where: {
      categoryBookId,
    },
  });

  return data;
};

export const readCategoryBooks = async () => {
  const prisma = new PrismaClient();

  const data = await prisma.categoryBook.findMany();

  return data;
};

export const insertCategoryBook = async (categoryBook: CategoryBook) => {
  const prisma = new PrismaClient();

  const data = await prisma.categoryBook.create({
    data: {
      name: categoryBook.name,
    },
  });

  return data;
};
