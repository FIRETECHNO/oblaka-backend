import { Controller, Post, Body, Get, Query, UseGuards } from '@nestjs/common';
import { AlbumService } from './album.service';
import { IAlbum } from './interfaces/IAlbum.interface';

import { AdminAuthGuard } from 'src/auth/admin.guard';

// all about MongoDB
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AlbumClass } from './schemas/album.schema';

@Controller('album')
export class AlbumController {
  constructor(
    private readonly AlbumService: AlbumService,
    // @InjectModel('Poster') private PosterModel: Model<PosterClass>,
  ) { }


  @Post("create")
  @UseGuards(AdminAuthGuard)
  async createAlbum(
    @Body("album") album: IAlbum
  ) {
    return await this.AlbumService.createAlbum(album)
  }

  @Get("all")
  // @UseGuards(AdminAuthGuard)
  async getAlbums(
  ) {
    return await this.AlbumService.getAlbums()
  }

  @Post("delete")
  @UseGuards(AdminAuthGuard)
  async delete(
    @Body("_id") _id: string
  ) {
    return await this.AlbumService.deleteAlbum(_id)
  }
}
