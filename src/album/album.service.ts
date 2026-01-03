import { Injectable } from '@nestjs/common';


// all about MongoDB
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AlbumClass, AlbumDocument } from './schemas/album.schema';
import { IAlbum } from './interfaces/IAlbum.interface';

@Injectable()
export class AlbumService {
  constructor(
    @InjectModel('Album') private AlbumModel: Model<AlbumClass>
  ) { }

  async createAlbum(poster: IAlbum): Promise<AlbumDocument> {
    return await this.AlbumModel.create(poster)
  }
  async getAlbums(): Promise<AlbumDocument[]> {
    return await this.AlbumModel.find({})
  }
  async deleteAlbum(_id: string): Promise<any> {
    return await this.AlbumModel.deleteOne({ _id })
  }
}
