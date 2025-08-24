import prisma from '@prisma';
import express from 'express';

const router = express.Router();

router.get('/test', async (req, res) => {
  console.log(await prisma.user.count());
  res.send('Success');
});

export default router;
