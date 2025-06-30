import express from 'express';

const router = express.Router();

import { router as routerFromDoctorsTable } from "./DoctorsTable/routes.js";
import { router as routerFromTasksTable } from "./TasksTable/routes.js";

router.use("/DoctorsTable", routerFromDoctorsTable);
router.use("/TasksTable", routerFromTasksTable);

export { router };