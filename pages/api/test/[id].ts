// Import NextResponse from "next/server" is correct for middleware or edge functions,
// but for typical API routes, you might not need it unless you're specifically
// working with Next.js 12's middleware or later versions for edge functions.

import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  const cars = await prisma.car.findMany()

    res.status(200).json(cars);
}