// src/controllers/auth.controller.ts
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'mysecretkey';

// Temporary in-memory user storage
const users: { [email: string]: { name: string; email: string; password: string } } = {};

export const register = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { name, email, password } = req.body;

  if (users[email]) {
    return res.status(409).json({ message: 'User already exists' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  users[email] = { name, email, password: hashedPassword };

  const token = jwt.sign({ email, name }, JWT_SECRET, { expiresIn: '1h' });
  return res.status(201).json({ message: 'User registered', token });
};

export const getMe = (req: Request, res: Response) => {
  const { email } = req.user;

  const user = users[email];
  if (!user) return res.status(404).json({ message: 'User not found' });

  res.json({ name: user.name, email: user.email });
};
