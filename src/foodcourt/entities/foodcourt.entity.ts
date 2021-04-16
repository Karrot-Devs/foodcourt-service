import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

interface OpenCloseTimeRange {
  openTime: Date,
  open
}

@Entity()
export default class FoodCourt {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  hidden: boolean;

  @Column()
  name: string;

  @Column()
  openTimeRange: string;
}
