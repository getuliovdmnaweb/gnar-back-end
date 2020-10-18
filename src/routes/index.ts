import { Router } from "express";
import { uploadFile } from "../controllers/postFile";
import multer from "multer";

const upload = multer({ dest: "tmp/" });

const routes = Router();

routes.post("/upload", upload.single("file"), uploadFile);

export default routes;
