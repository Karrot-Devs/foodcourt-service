import { Module } from '@nestjs/common';
import { FoodcourtController } from './foodcourt.controller';
import { FoodcourtService } from './foodcourt.service';

@Module({
  controllers: [FoodcourtController],
  providers: [FoodcourtService]
})
export class FoodcourtModule {}
