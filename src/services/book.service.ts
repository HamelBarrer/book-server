import { PrismaClient } from '@prisma/client';
import { Book } from '../interfaces/book.interface';

export const readBook = async (bookId: number) => {
  const prisma = new PrismaClient();

  const data = await prisma.book.findUnique({
    select: {
      bookId: true,
      title: true,
      author: {
        select: {
          userId: true,
          firstName: true,
          lastName: true,
          avatar: true,
        },
      },
      categoryBook: {
        select: {
          name: true,
        },
      },
      summary: true,
      createdAt: true,
    },
    where: { bookId },
  });

  return data;
};

export const readBooks = async () => {
  const prisma = new PrismaClient();

  const data = await prisma.book.findMany({
    select: {
      bookId: true,
      title: true,
      author: {
        select: {
          userId: true,
          firstName: true,
          lastName: true,
          avatar: true,
        },
      },
      categoryBook: {
        select: {
          name: true,
        },
      },
      summary: true,
      createdAt: true,
    },
    orderBy: { createdAt: 'desc' },
  });

  return data;
};

export const insertBook = async (book: Book) => {
  const prisma = new PrismaClient();

  const data = await prisma.book.create({
    data: {
      title: book.title,
      authorId: book.authorId,
      categoryBookId: book.categoryBookId,
      summary: book.summary,
    },
    select: {
      bookId: true,
      title: true,
      author: {
        select: {
          userId: true,
          firstName: true,
          lastName: true,
          avatar: true,
        },
      },
      categoryBook: {
        select: {
          name: true,
        },
      },
      summary: true,
      createdAt: true,
    },
  });

  return data;
};
