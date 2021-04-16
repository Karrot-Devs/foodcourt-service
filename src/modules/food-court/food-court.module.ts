import { Module } from '@nestjs/common';
import { FoodCourtController } from './food-court.controller';
import { FoodCourtService } from './food-court.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodCourtRepository } from '../../core/repositories/food-court.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FoodCourtRepository])],
  controllers: [FoodCourtController],
  providers: [FoodCourtService],
})
export class FoodCourtModule {}
