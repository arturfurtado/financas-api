import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { IsDate } from "class-validator";
import { UserAccounts } from "./user_accounts";

@Entity()
export class Transactions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category_id: number;

  @Column()
  amount: number; //alterar no futuro

  @Column()
  @IsDate()
  transaction_date: Date;

  @Column()
  description: string;

  @Column()
  transaction_type: string;

  @ManyToOne(() => UserAccounts, (userAccounts) => userAccounts.transactions)
  @JoinColumn({ name: "user_account_id" })
  userAccounts: UserAccounts;
}  
