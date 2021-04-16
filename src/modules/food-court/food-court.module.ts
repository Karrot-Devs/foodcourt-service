import { Module } from '@nestjs/common';
import { FoodCourtController } from './food-court.controller';
import { FoodCourtService } from './food-court.service';

@Module({
  controllers: [FoodCourtController],
  providers: [FoodCourtService]
})
export class FoodCourtModule {}
