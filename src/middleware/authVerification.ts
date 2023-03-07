import { Request, Response, NextFunction } from 'express';

import { valitionToken } from '../utils/token';

export const authVerification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) return res.status(404).json({ data: 'Information not found' });

  if (!token.toLowerCase().startsWith('bearer'))
    return res.status(404).json({ data: 'Information not found' });

  const jwt = token.substring(7);

  const userId = await valitionToken(jwt);
  if (!userId) return res.status(404).json({ data: 'Information not found' });

  req.userId = userId;

  return next();
};
