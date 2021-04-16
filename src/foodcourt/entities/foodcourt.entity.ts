import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

interface OpenCloseTimeRange {
  openTime: Date,
  closeTime: Date,
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

  @Column()
  openTimeRange: OpenCloseTimeRange;

  @Column()
  address: string;

  @Column()
  coordinates: LocationCoordinates;

  @Column()
  foodCourtType: FoodCourtType;

  @Column()
  coverPhotoUrl: string;
}
