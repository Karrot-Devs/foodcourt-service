import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

interface Items {
  item: string;
  count: number;
}

enum Status {
  Cancelled,
  Delivered,
  Shipped,
  Received,
  OutforDelivery,
  Placed,
}

@Entity()
export default class FoodCourt {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  paid: boolean;

  @Column()
  paymentType: string;

  @Column('simple-json')
  items: Items;

  @Column()
  orderedFrom: string;

  @Column()
  transaction_id: string;

  @Column()
  orderedBy: string;

  @Column()
  deliveryBy: string;

  @Column()
  amount: number;

  @Column()
  address: string;

  @Column()
  deduction: number;

  @Column()
  totalGST: number;

  @Column({
    type: 'simple-enum',
    enum: Status,
  })
  status: Status;
}
