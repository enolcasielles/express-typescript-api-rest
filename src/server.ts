import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get('/', (_req: Request, res: Response) => {
  res.send({message: "hola mundo!!"});
});

app.listen(3000, () => {
  console.log('app escuchando en puerto 3000');
});