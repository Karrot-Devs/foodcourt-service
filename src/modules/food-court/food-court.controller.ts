import { Controller, Get } from '@nestjs/common';
import FoodCourt from './entities/foodcourt.entity';
import { FoodCourtService } from './food-court.service';

@Controller('food-court')
export class FoodCourtController {
  constructor(private foodCourtService: FoodCourtService) {}

  @Get()
  async getAllFoodCourts(): Promise<FoodCourt[]> {
    return this.foodCourtService.getAll();
  }
}
