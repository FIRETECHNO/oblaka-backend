import { MongooseModule } from "@nestjs/mongoose";
import { AlbumSchema } from "../schemas/album.schema";

let AlbumModel = MongooseModule.forFeature([{ name: 'Album', schema: AlbumSchema, collection: 'albums' }])
export default AlbumModel