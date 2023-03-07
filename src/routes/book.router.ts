import { Router } from 'express';

import { createBook, getBook, getBooks } from '../controllers/book.controller';

const router = Router();

router.get('/:bookId', getBook);
router.get('/', getBooks);
router.post('/', createBook);

export default router;
