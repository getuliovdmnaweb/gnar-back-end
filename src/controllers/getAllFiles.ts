import "reflect-metadata";
import { getConnection } from "typeorm";
import { File } from "../entity/File";

export const getAllFiles = async (req,res,next) => {
    const connection = getConnection()
    const allFiles = await connection.getRepository(File).find();
    
    res.status(200).json(allFiles);
}