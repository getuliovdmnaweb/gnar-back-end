import "reflect-metadata";
import { getConnection } from "typeorm";
import { Yard } from "../entity/Yard";

export const getAllFiles = async (req,res,next) => {
    const connection = getConnection()
    const allYards = await connection.getRepository(Yard).find();
    
    res.status(200).json(allYards);
}