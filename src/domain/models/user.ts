import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad,
} from "typeorm";
import { IsEmail, MaxLength, Matches, Length } from "class-validator";
import { UserAccounts } from "./user_accounts";
import { sendValidateMessage } from "../../infra/helper/message-validator";
import ExtendedBaseEntity from "./base_entity_model";
import * as bcrypt from "bcrypt";
@Entity()
export class User extends ExtendedBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  @Length(2, 100)
  username: string;

  @Column({ type: "varchar" })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message: `Por favor crie uma ${sendValidateMessage(
      "Senha"
    )} que corresponda aos requisitos citados `,
  })
  password: string;

  @Column({ unique: true, type: "varchar" })
  @MaxLength(14)
  cpf: string;

  @Column({ unique: true, type: "varchar" })
  @IsEmail(undefined, {
    message: sendValidateMessage("Email"),
  })
  email: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @OneToMany(() => UserAccounts, (userAccounts) => userAccounts.user)
  userAccounts: UserAccounts[];

  cachePassword: string;

  @AfterLoad()
  gencachePassword() {
    this.cachePassword = this.password;
  }

  @BeforeInsert()
  @BeforeUpdate()
  async genHashPassword() {
    if (this.cachePassword === this.password) return;
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }

  async PasswordValidator(inputPassword: string): Promise<boolean> {
    return await bcrypt.compare(inputPassword, this.password);
  }
}
