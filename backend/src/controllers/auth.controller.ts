import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import prisma from '../prisma';
import { generateToken } from '../middlewares/auth';

export async function login(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body as { email: string; password: string };

  const admin = await prisma.admin.findUnique({ where: { email } });
  if (!admin) {
    res.status(401).json({ error: 'E-mail ou senha incorretos' });
    return;
  }

  const valid = await bcrypt.compare(password, admin.passwordHash);
  if (!valid) {
    res.status(401).json({ error: 'E-mail ou senha incorretos' });
    return;
  }

  const token = generateToken(admin.id);

  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 30 * 60 * 1000,
  });

  res.json({ message: 'Login realizado com sucesso' });
}

export function logout(_req: Request, res: Response): void {
  res.clearCookie('token');
  res.json({ message: 'Logout realizado com sucesso' });
}
