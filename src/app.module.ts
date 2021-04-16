import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './modules/orders/orders.module';
import { FoodCourtModule } from './modules/food-court/food-court.module';

@Module({
  imports: [OrdersModule, FoodCourtModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
