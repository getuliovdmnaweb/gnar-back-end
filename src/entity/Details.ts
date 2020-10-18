import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn, ManyToOne
} from "typeorm";
import { File } from "./File";

@Entity()
export class Details {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  yardCode: string;

  @Column()
  employeeCode: string;

  @Column()
  clockIn: string;

  @Column()
  clockOut: string;

  @ManyToOne((type) => File, file=> file.details)
  file: File;
}
