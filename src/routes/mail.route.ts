import { Router } from 'express';
import { sendMail } from '../controllers/mail.controller';

const router = Router();
router.post('/', sendMail);

export default router;