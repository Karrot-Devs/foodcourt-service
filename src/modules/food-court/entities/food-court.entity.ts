import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

interface OpenCloseTimeRange {
  openTime: number,
  closeTime: number,
}

interface LocationCoordinates {
  latitude: string;
  longitude: string;
}

enum FoodCourtType {
  CENTRAL,
  INDEPENDENT,
}

@Entity()
export default class FoodCourt {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  hidden: boolean;

  @Column()
  name: string;

  @Column('simple-json')
  openTimeRange: OpenCloseTimeRange;

  @Column()
  address: string;

  @Column('simple-json')
  coordinates: LocationCoordinates;

  @Column({
    type: 'simple-enum',
    enum: FoodCourtType,
  })
  foodCourtType: FoodCourtType;

  @Column({ nullable: true })
  coverPhotoUrl: string;
}
