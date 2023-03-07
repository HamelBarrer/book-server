import { PrismaClient } from '@prisma/client';
import { Review } from '../interfaces/review.interface';

export const readReviews = async (bookId: number) => {
  const prisma = new PrismaClient();

  const data = await prisma.review.findMany({
    where: {
      bookId,
    },
    orderBy: { createdAt: 'desc' },
  });

  return data;
};

export const insertReview = async (review: Review) => {
  try {
    const prisma = new PrismaClient();

    const data = await prisma.review.create({
      data: {
        userId: review.userId,
        bookId: review.bookId,
        qualification: review.qualification,
        comment: review.comment,
      },
      select: {
        reviewId: true,
        user: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
        comment: true,
        createdAt: true,
      },
    });

    return data;
  } catch (error) {
    return error;
  }
};
