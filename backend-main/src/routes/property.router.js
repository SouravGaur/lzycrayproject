import { Router } from "express";
import { upload } from "../middelware/multer.middelware.js";

import {
  createProperty,
  getProperties,
} from "../controllers/property.controller.js";

const router = Router();

router
  .route("/")
  .post(upload.array("images", 20), createProperty)
  .get(getProperties);

export default router;
