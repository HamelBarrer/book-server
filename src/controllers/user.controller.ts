import { Request, Response } from 'express';
import { insertUser, readUser } from '../services/user.service';

export const getUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);

  const user = await readUser(userId);
  if (!user) return res.status(404).json({ data: 'User not found' });

  return res.status(200).json({ data: user });
};

export const createUser = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, passwordConfirm } = req.body;

  if (!firstName)
    return res.status(400).json({ data: 'First Name is required' });
  if (!lastName) return res.status(400).json({ data: 'Last Name is required' });
  if (!email) return res.status(400).json({ data: 'Email is required' });
  if (!password)
    return res.status(400).json({ data: 'Password Name is required' });
  if (!passwordConfirm)
    return res.status(400).json({ data: 'Password confirm is required' });

  if (password !== passwordConfirm)
    return res.status(400).json({ data: 'Password not equals' });

  const user = await insertUser(req.body);

  return res.status(200).json({ data: user });
};
