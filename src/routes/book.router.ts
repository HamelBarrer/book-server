import { Router } from 'express';

import { createBook, getBook, getBooks } from '../controllers/book.controller';
import { authVerification } from '../middleware/authVerification';

const router = Router();

router.get('/:bookId', getBook);
router.get('/', getBooks);
router.post('/', authVerification, createBook);

export default router;
