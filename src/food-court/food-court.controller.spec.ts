import { Test, TestingModule } from '@nestjs/testing';
import { FoodCourtController } from './food-court.controller';

describe('FoodCourtController', () => {
  let controller: FoodCourtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodCourtController],
    }).compile();

    controller = module.get<FoodCourtController>(FoodCourtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
