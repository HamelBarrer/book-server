import { Router } from 'express';
import {
  createCategoryBook,
  getCategoryBook,
  getCategoryBooks,
} from '../controllers/categoryBook.controller';

const router = Router();

router.get('/:categoryBookId', getCategoryBook);
router.get('/', getCategoryBooks);
router.post('/', createCategoryBook);

export default router;
