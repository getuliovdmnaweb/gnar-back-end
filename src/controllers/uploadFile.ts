import * as fs from "fs";
import * as path from "path";
import * as csv from "fast-csv";
import { storeFile } from "../helpers/storeFile";
import { getRepository } from "typeorm";
import { File } from '../entity/File'

export const uploadFile = async (req, res, next) => {
  const filePath = path.resolve(__dirname, "../..", req.file.path);
  const csvFile = [];

  fs.createReadStream(filePath)
    .pipe(csv.parse({ headers: true }))
    .on("error", (error) =>
      res.status(500).json({
        error,
      })
    )
    .on("data", (row) => {
      csvFile.push(row);
    })
    .on("end", async () => {
      fs.unlinkSync(req.file.path);
      await storeFile(req.body.fileName, csvFile);
      const allFiles = await getRepository(File).find();
      res.status(201).json({
        message: "Csv was Successfully stored in Database!",
        allFiles
      });
    });
};
