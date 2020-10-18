import express, { Application } from "express";
import cors from "cors";
import { createConnection } from "typeorm";
import routes from './routes'

createConnection()
  .then(async (connection) => {
    const app = express() as Application;

    
    app.use(cors());

    app.use(routes);

    app.set("json spaces", 4);

    app.listen(8080);
  })
  .catch((error) => console.log(error));
