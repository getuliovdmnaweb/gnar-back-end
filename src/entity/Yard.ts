import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Yard {

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

}
