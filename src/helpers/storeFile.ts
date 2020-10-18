import "reflect-metadata";
import { getConnection } from "typeorm";
import { File } from "../entity/File";
import { Details } from "../entity/Details";

export const storeFile = async (fileName, csvDetails) => {
  const connection = await getConnection();
  const file = instanciateFile(fileName);
  await connection.manager.save(file);
  csvDetails.forEach(async (csvDetail) => {
    const detail = instanciateDetails(file, csvDetail);

    await connection.manager.save(detail);
  });
};

const instanciateFile = (fileName) => {
  const newFile = new File();

  newFile.fileName = fileName;

  return newFile;
};

const instanciateDetails = (file, csvDetail) => {
  const newDetail = new Details();

  newDetail.yardCode = csvDetail["Yard Code"];
  newDetail.employeeCode = csvDetail["Employee Code"];
  newDetail.clockIn = csvDetail["Clock In"];
  newDetail.clockOut = csvDetail["Clock Out"];
  newDetail.file = file;

  return newDetail;
};
