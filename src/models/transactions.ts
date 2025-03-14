import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { IsDate } from "class-validator";
import { UserAccounts } from "./user_accounts";
import ExtendedBaseEntity from "./base_entity_model";

@Entity()
export class Transactions extends ExtendedBaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "integer"})
  category_id: number;

  @Column({type: "int"})
  amount: number; //alterar no futuro

  @CreateDateColumn({type: "timestamp"})
  @IsDate()
  transaction_date: Date;

  @Column({type: "varchar"})
  description: string;

  @Column({type: "varchar"})
  transaction_type: string;

  @ManyToOne(() => UserAccounts, (userAccounts) => userAccounts.transactions)
  @JoinColumn({ name: "user_account_id" })
  userAccounts: UserAccounts;
}  
