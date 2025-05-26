// src/routes/auth.routes.ts
import { Router } from 'express';
import { body } from 'express-validator';
import { register, getMe } from '../controllers/auth.controller';
import authMiddleware from '../middleware/auth.middleware';

const router = Router();

// Register route with validation
router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  register
);

// Protected route
router.get('/user', authMiddleware, getMe);

export default router;
