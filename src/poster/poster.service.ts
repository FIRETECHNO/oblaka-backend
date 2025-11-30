import { Injectable } from '@nestjs/common';


// all about MongoDB
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PosterClass, PosterDocument } from './schemas/poster.schema';
import { IPoster } from './interfaces/IPoster.interface';

@Injectable()
export class PosterService {
  constructor(
    @InjectModel('Poster') private PosterModel: Model<PosterClass>
  ) { }

  async createPoster(poster: IPoster): Promise<PosterDocument> {
    return await this.PosterModel.create(poster)
  }
}
