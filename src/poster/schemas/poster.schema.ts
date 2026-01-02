import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type PosterDocument = HydratedDocument<PosterClass>;

@Schema({ timestamps: true })
export class PosterClass {
  @Prop({
    type: Array,
    default: [],
  })
  images: string[];

  @Prop({
    type: String,
    default: "",
  })
  markdownText: string

  @Prop({
    type: Date,
    default: "",
  })
  eventDate: Date
}

export const PosterSchema = SchemaFactory.createForClass(PosterClass);