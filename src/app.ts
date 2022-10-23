import "reflect-metadata";
import "express-async-errors";
import express from "express";

import userRouter from "./routes/user.routes";
import sessionRouter from "./routes/session.routes"
import categoriesRouter from "./routes/categories.routes";
import propertiesRouter from "./routes/properties.routes";
import schedulesRouter from "./routes/schedules.routes";
import handleErrorMiddleware from "./middlewares/handleError.middleware";

const app = express();
app.use(express.json());

app.use('/users', userRouter);
app.use('/login', sessionRouter);
app.use('/categories',categoriesRouter);
app.use('/properties',propertiesRouter);
app.use('/schedules', schedulesRouter);

app.use(handleErrorMiddleware);

export default app;
