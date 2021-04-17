import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { FoodCourtType } from '../../../shared/types/food-court.types';
import {
  LocationCoordinates,
  OpenCloseTimeRange,
} from '../../../shared/types/date-time-location.types';

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
