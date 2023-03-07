import { Request, Response } from 'express';
import { insertReview, readReviews } from '../services/review.service';

export const getReviews = async (req: Request, res: Response) => {
  const bookId = parseInt(req.params.bookId);

  const data = await readReviews(bookId);
  if (data.length === 0) return res.status(400).json({ data: 'Not reviews' });

  return res.status(200).json({ data });
};

export const createReview = async (req: Request, res: Response) => {
  const { userId, bookId, qualification, comment } = req.body;

  if (!userId) return res.status(400).json({ data: 'User is required' });
  if (!bookId) return res.status(400).json({ data: 'Book is required' });
  if (!qualification)
    return res.status(400).json({ data: 'Qualification is required' });
  if (!comment) return res.status(400).json({ data: 'Comment is required' });

  const data = await insertReview(req.body);

  return res.status(200).json({ data });
};
