import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column({ unique: true })
  email?: string;

  @Column()
  senha?: string;


  constructor(
    id?: number,
    name?: string,
    email?: string,
    senha?: string,
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.senha = senha
  }
}


export default User