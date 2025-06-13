import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chain {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  website: string;

  @Column({ nullable: true })
  logoUrl?: string;
}
