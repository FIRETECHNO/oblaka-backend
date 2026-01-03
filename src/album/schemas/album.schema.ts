import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AlbumDocument = HydratedDocument<AlbumClass>;

@Schema({ })
export class AlbumClass {
  @Prop({
    type: String,
    default: "",
  })
  url: string
}

export const AlbumSchema = SchemaFactory.createForClass(AlbumClass);