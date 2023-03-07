import { Request, Response } from 'express';
import { insertBook, readBook, readBooks } from '../services/book.service';

export const getBook = async (req: Request, res: Response) => {
  const bookId = parseInt(req.params.bookId);

  const data = await readBook(bookId);
  if (!data) return res.status(404).json({ data: 'Book not found' });

  return res.status(200).json({ data });
};

export const getBooks = async (_: Request, res: Response) => {
  const data = await readBooks();
  if (data.length === 0)
    return res.status(404).json({ data: 'Books not exists' });

  return res.status(200).json({ data });
};

export const createBook = async (req: Request, res: Response) => {
  const { title, authorId, categoryBookId, summary } = req.body;

  if (!title) return res.status(400).json({ data: 'Title is required' });
  if (!authorId) return res.status(400).json({ data: 'Author is required' });
  if (!categoryBookId)
    return res.status(400).json({ data: 'Category Book is required' });
  if (!summary) return res.status(400).json({ data: 'summary is required' });

  const data = await insertBook(req.body);

  return res.status(200).json({ data });
};
