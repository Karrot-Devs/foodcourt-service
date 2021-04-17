import { EntityRepository, Repository } from 'typeorm';
import FoodCourt from '../../modules/food-court/entities/food-court.entity';
import { FoodCourtType } from '../../shared/types/food-court.types';

@EntityRepository(FoodCourt)
export class FoodCourtRepository extends Repository<FoodCourt> {
  findAll(): Promise<FoodCourt[]> {
    return this.find({});
  }

  insertOne(entity: {
    hidden: boolean;
    name: string;
    openTimeRange: { openTime: number; closeTime: number };
    address: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    foodCourtType: FoodCourtType;
  }): Promise<FoodCourt> {
    return this.save(entity);
  }
}
