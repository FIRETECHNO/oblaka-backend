import { Module } from '@nestjs/common';
import { PosterService } from './poster.service';
import { PosterController } from './poster.controller';
import PosterModel from './models/poster.model';

@Module({
  controllers: [PosterController],
  providers: [PosterService],
  imports: [PosterModel]
})
export class PosterModule { }
