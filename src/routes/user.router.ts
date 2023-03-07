import { Router } from 'express';
import { createUser, getUser } from '../controllers/user.controller';

const router = Router();

router.get('/:userId', getUser);
router.post('/', createUser);

export default router;
