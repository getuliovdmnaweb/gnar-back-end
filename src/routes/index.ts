import { Router } from "express";
import { uploadFile } from "../controllers/uploadFile";
import { getAllFiles } from "../controllers/getAllFiles";
import { getAllDetails} from "../controllers/gettAllDetails";
import multer from "multer";

const upload = multer({ dest: "tmp/" });

const routes = Router();

routes.post("/uploads", upload.single("file"), uploadFile);
routes.get("/uploads", getAllFiles);
routes.get("/uploads/:uploadId", getAllDetails);

export default routes;
