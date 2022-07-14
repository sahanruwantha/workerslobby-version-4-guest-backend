import { Test, TestingModule } from '@nestjs/testing';
import { ProjectManagerController } from './project-manager.controller';

describe('ProjectManagerController', () => {
  let controller: ProjectManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectManagerController],
    }).compile();

    controller = module.get<ProjectManagerController>(ProjectManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
