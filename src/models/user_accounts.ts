import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user";
import { Transactions } from "./transactions";
import ExtendedBaseEntity from "./base_entity_model";

@Entity()
export class UserAccounts extends ExtendedBaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "varchar"})
  bank: string;

  @Column({type: "varchar"})
  account_name: string;

  @Column({type: "varchar"})
  account_card: string;

  @CreateDateColumn({type: "timestamp"})
  created_at: Date;

  @ManyToOne(() => User, (user) => user.userAccounts)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToMany(() => Transactions, (transaction) => transaction.userAccounts)
  transactions: Transactions[];
}
