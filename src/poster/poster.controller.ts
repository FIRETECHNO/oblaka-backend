import { Controller, Post, Body, Get, Query, UseGuards } from '@nestjs/common';
import { PosterService } from './poster.service';
import { IPoster } from './interfaces/IPoster.interface';

import { AdminAuthGuard } from 'src/auth/admin.guard';

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
  @UseGuards(AdminAuthGuard)
  async createPoster(
    @Body("poster") poster: IPoster
  ) {
    return await this.posterService.createPoster(poster)
  }

  @Get("all")
  @UseGuards(AdminAuthGuard)
  async getPosters(
  ) {
    return await this.posterService.getPosters()
  }
  @Get("by-id")
  @UseGuards(AdminAuthGuard)
  async getPosterById(
    @Query("_id") _id: string
  ) {
    return await this.posterService.getPosterById(_id)
  }
  @Post("edit")
  @UseGuards(AdminAuthGuard)
  async edit(
    @Body("poster") poster: IPoster,
    @Body("_id") _id: string
  ) {
    return await this.posterService.edit(poster, _id)
  }

  @Post("delete")
  @UseGuards(AdminAuthGuard)
  async delete(
    @Body("_id") _id: string
  ) {
    return await this.posterService.deletePoster(_id)
  }


  @Get("get-for-main-page")
  async getForMainPage() {
    return await this.posterService.getLastPosters(15)
  }
}
