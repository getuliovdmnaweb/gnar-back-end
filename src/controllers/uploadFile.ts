import * as fs from "fs";
import * as path from "path";
import * as csv from "fast-csv";
import { storeYards } from "../helpers/storeYards";

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
      await storeYards(csvFile);
      res.status(201).json({
        message: 'Csv was Successfully stored in Database!'
      });
    });
};
