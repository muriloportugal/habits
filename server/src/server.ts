import Fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from '../prisma/routes';

const app = Fastify();

app.register(cors,{
  origin: ['*'],
});

app.register(appRoutes);



app.listen({
  port:3333,
}).then(()=>{
  console.log('Http Server running at port 3333');
});