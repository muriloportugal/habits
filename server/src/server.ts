import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

const app = Fastify();
const prisma = new PrismaClient();
app.register(cors,{
  origin: ['*'],
});

app.get('/',()=>{
  const habits = prisma.habit.findMany({

  });
});

app.listen({
  port:3333,
}).then(()=>{
  console.log('Http Server running at port 3333');
});