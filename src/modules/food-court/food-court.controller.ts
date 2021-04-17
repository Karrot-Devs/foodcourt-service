import { Controller, Get, Post } from '@nestjs/common';
import FoodCourt from './entities/food-court.entity';
import { FoodCourtService } from './food-court.service';
import { FoodCourtRepository } from '../../core/repositories/food-court.repository';

@Controller('food-court')
export class FoodCourtController {
  constructor(private foodCourtService: FoodCourtService) {}

  @Get()
  async getAllFoodCourts(): Promise<FoodCourt[]> {
    return this.foodCourtService.getAll();
  }

  // @Post()
  // async addTestRecord(): Promise<any> {
  //   return await this.foodCourtRepository.insertOne({
  //     name: 'Test Food Court',
  //     address: 'Mars, Red head Plat',
  //     coordinates: { latitude: '20.20.20.20', longitude: '21.21.21.21' },
  //     foodCourtType: 1,
  //     hidden: false,
  //     openTimeRange: { openTime: 800, closeTime: 1800 },
  //   });
  // }
}
