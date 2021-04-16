import { Injectable } from '@nestjs/common';
import FoodCourt from './entities/food-court.entity';
import { FoodCourtRepository } from '../../core/repositories/food-court.repository';

@Injectable()
export class FoodCourtService {
  constructor(private foodCourtRepository: FoodCourtRepository) {}

  getAll(): Promise<FoodCourt[]> {
    return this.foodCourtRepository.findAll();
  }
}
