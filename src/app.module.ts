import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';

import { FoodcourtModule } from './foodcourt/foodcourt.module';


@Module({
  imports: [FoodcourtModule,OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
