import { Router } from 'express';
import { createReview, getReviews } from '../controllers/review.controller';
import { authVerification } from '../middleware/authVerification';

const router = Router();

router.get('/:bookId', getReviews);
router.post('/', authVerification, createReview);

export default router;
