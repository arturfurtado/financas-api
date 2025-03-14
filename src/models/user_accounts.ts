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

@Entity()
export class UserAccounts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bank: string;

  @Column()
  account_name: string;

  @Column()
  account_card: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => User, (user) => user.userAccounts)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToMany(() => Transactions, (transaction) => transaction.userAccounts)
  transactions: Transactions[];
}
