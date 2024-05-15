import express from 'express';
import { createConnection } from 'typeorm';
import routes from './routes/routes';
import cors from 'cors';
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const allowedOrigins = [`${process.env.ALLOWED_ORIGIN}`, '*'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));
app.use(express.json());

app.use(express.json());
app.use('/api', routes);

createConnection().then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
}).catch(error => console.log('Erro ao conectar ao banco de dados: ', error));