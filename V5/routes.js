import express from 'express';

const router = express.Router();

import { router as routerFromTasksTable } from "./TasksTable/routes.js";

router.use("/TasksTable", routerFromTasksTable);

export { router };