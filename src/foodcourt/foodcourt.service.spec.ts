import { Test, TestingModule } from '@nestjs/testing';
import { FoodcourtService } from './foodcourt.service';

describe('FoodcourtService', () => {
  let service: FoodcourtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodcourtService],
    }).compile();

    service = module.get<FoodcourtService>(FoodcourtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
