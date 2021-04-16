import { Test, TestingModule } from '@nestjs/testing';
import { FoodCourtService } from './food-court.service';

describe('FoodCourtService', () => {
  let service: FoodCourtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodCourtService],
    }).compile();

    service = module.get<FoodCourtService>(FoodCourtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
