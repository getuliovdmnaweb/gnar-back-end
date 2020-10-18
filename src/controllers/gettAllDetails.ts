import "reflect-metadata";
import { getConnection } from "typeorm";
import { File } from "../entity/File";
export const getAllDetails = async (req, res, next) => {
  const connection = getConnection();

  const { uploadId } = req.params;
  const allDetails = await connection
    .getRepository(File)
    .find({ relations: ["details"], where: {id: uploadId} });

  res.status(200).json(allDetails);
};
