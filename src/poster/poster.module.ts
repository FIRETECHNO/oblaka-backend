import { Module } from '@nestjs/common';
import { PosterService } from './poster.service';
import { PosterController } from './poster.controller';
import PosterModel from './models/poster.model';
import UserModel from 'src/user/models/user.model';
import { TokenService } from 'src/token/token.service';
import TokenModel from 'src/token/models/token.model';

@Module({
  controllers: [PosterController],
  providers: [PosterService, TokenService],
  imports: [PosterModel, UserModel, TokenModel]
})
export class PosterModule { }
