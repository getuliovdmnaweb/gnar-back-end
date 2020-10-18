import { Router } from "express";
import { uploadFile } from "../controllers/uploadFile";
import { getAllFiles } from "../controllers/getAllFiles";
import multer from "multer";

const upload = multer({ dest: "tmp/" });

const routes = Router();

routes.post("/uploads", upload.single("file"), uploadFile);
routes.get("/uploads", getAllFiles);

export default routes;
