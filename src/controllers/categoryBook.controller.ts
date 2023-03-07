import { Request, Response } from 'express';
import {
  insertCategoryBook,
  readCategoryBook,
  readCategoryBooks,
} from '../services/category.service';

export const getCategoryBook = async (req: Request, res: Response) => {
  const categoryBookId = parseInt(req.params.categoryBookId);

  const data = await readCategoryBook(categoryBookId);
  if (!data) return res.status(404).json({ data: 'Category Book not found' });

  return res.status(200).json({ data });
};

export const getCategoryBooks = async (_: Request, res: Response) => {
  const data = await readCategoryBooks();
  if (data.length === 0) return res.status(400).json({ data: 'Not data' });

  return res.status(200).json({ data });
};

export const createCategoryBook = async (req: Request, res: Response) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ data: 'Name is required' });

  const data = await insertCategoryBook(req.body);

  return res.status(200).json({ data });
};
