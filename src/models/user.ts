import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { IsEmail, IsDate, MaxLength } from "class-validator";
import { UserAccounts } from "./user_accounts";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  @MaxLength(14)
  cpf: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @CreateDateColumn()
  @IsDate()
  created_at: Date;

  @UpdateDateColumn()
  @IsDate()
  updated_at: Date;

  @OneToMany(() => UserAccounts, (userAccounts) => userAccounts.user )
  userAccounts: UserAccounts[]
}
