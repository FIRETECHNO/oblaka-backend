import { MongooseModule } from "@nestjs/mongoose";
import { PosterSchema } from "../schemas/poster.schema";

let PosterModel = MongooseModule.forFeature([{ name: 'Poster', schema: PosterSchema, collection: 'posters' }])
export default PosterModel