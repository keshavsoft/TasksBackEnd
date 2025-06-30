import express from 'express';

const router = express.Router();

import { router as routerFromInsertWithPk } from "./InsertWithPk/routes.js";
import { router as routerFromInsertWithColumns } from "./InsertWithColumns/routes.js";
import { router as routerFromInsertColumnExist } from "./InsertColumnExist/routes.js";
import { router as routerFromInsertAsIs } from "./InsertAsIs/routes.js";
import { router as routerFromInsertWithPkAndTS } from "./InsertWithPkAndTS/routes.js";

router.use("/InsertWithPk", routerFromInsertWithPk);
router.use("/InsertWithColumns", routerFromInsertWithColumns);
router.use("/InsertColumnExist", routerFromInsertColumnExist);
router.use("/InsertAsIs", routerFromInsertAsIs);
router.use("/InsertWithPkAndTS", routerFromInsertWithPkAndTS);

export { router };