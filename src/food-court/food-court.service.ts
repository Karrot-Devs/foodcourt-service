import { Injectable } from '@nestjs/common';
import FoodCourt from './entities/foodcourt.entity';

@Injectable()
export class FoodCourtService {
  getAll(): Promise<FoodCourt[]> {
    return this.productRepository.findAll();
  }
}
