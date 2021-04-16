import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodcourtModule } from './foodcourt/foodcourt.module';

@Module({
  imports: [FoodcourtModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
