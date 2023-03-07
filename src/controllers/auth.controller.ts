import { Request, Response } from 'express';
import { readUserEmail } from '../services/user.service';
import { validationHash } from '../utils/hash';
import { creationToken } from '../utils/token';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email) return res.status(400).json({ data: 'Email is required' });
  if (!password) return res.status(400).json({ data: 'Password is required' });

  const user = await readUserEmail(email);
  if (!user)
    return res.status(404).json({ data: 'Email or Password incorrect' });

  if (!validationHash(password, user.password))
    return res.status(404).json({ data: 'Email or Password incorrect' });

  const token = await creationToken(user.userId);

  return res.status(200).json({
    data: {
      token,
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });
};
