import { Test, TestingModule } from '@nestjs/testing';
import { PrjectManagerController } from './prject-manager.controller';

describe('PrjectManagerController', () => {
  let controller: PrjectManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrjectManagerController],
    }).compile();

    controller = module.get<PrjectManagerController>(PrjectManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
