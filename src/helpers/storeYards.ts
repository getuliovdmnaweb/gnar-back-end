import "reflect-metadata";
import { getConnection } from "typeorm";
import { Yard } from "../entity/Yard";

export const storeYards = async (csvYards) => {
  const connection = await getConnection();
  
  csvYards.forEach(async (csvYard) => {
    const yard = instanciateYard(csvYard);
    await connection.manager.save(yard);
  });
};

const instanciateYard = (csvYard) => {
  const newYard = new Yard();

  newYard.yardCode = csvYard["Yard Code"];
  newYard.employeeCode = csvYard["Employee Code"];
  newYard.clockIn = csvYard["Clock In"];
  newYard.clockOut = csvYard["Clock Out"];

  return newYard;
};
