import { Controller, Post, Body, Get } from '@nestjs/common';
import { PosterService } from './poster.service';
import { IPoster } from './interfaces/IPoster.interface';

// all about MongoDB
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PosterClass } from './schemas/poster.schema';

@Controller('poster')
export class PosterController {
  constructor(
    private readonly posterService: PosterService,
    // @InjectModel('Poster') private PosterModel: Model<PosterClass>,
  ) { }


  @Post("create")
  async createPoster(
    @Body("poster") poster: IPoster
  ) {
    return await this.posterService.createPoster(poster)
  }
}
