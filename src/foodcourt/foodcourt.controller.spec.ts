import { Test, TestingModule } from '@nestjs/testing';
import { FoodcourtController } from './foodcourt.controller';

describe('FoodcourtController', () => {
  let controller: FoodcourtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodcourtController],
    }).compile();

    controller = module.get<FoodcourtController>(FoodcourtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
