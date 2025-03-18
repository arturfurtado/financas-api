import { IsDate } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import ExtendedBaseEntity from "./base_entity_model";
@Entity()
export class Category extends ExtendedBaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "varchar"})
  name: string;

  @CreateDateColumn({type: "timestamp"})
  @IsDate()
  created_at: Date;
}
