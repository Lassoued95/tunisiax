import express, { Request, Response } from 'express';
import mongoose from 'mongoose'; // 🔥 Needed for ObjectId validation
import { login, registre, getData, deleteUser } from '../services/userService';
import userModel from '../models/userModel';

const router = express.Router();



router.post('/register', async (request: Request, response: Response) => {
  const { firstName, lastName, email, password } = request.body;
  const { statusCode, data } = await registre({ firstName, lastName, email, password });
  response.status(statusCode).json(data);
});

router.post('/login', async (request: Request, response: Response) => {
  const { email, password } = request.body;
  const { statusCode, data } = await login({ email, password });
  response.status(statusCode).json(data);
});

router.get('/admin', async (req: Request, res: Response) => {
  try {
    const { statusCode, data } = await getData();
    res.status(statusCode).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.delete('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;
  const { statusCode, data } = await deleteUser(id);
  response.status(statusCode).json(data);
});

export default router;
