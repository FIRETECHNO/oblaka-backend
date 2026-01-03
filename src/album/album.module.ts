import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import AlbumModel from './models/album.model';
import { TokenService } from 'src/token/token.service';
import UserModel from 'src/user/models/user.model';
import TokenModel from 'src/token/models/token.model';

@Module({
    controllers: [AlbumController],
    providers: [AlbumService, TokenService],
    imports:[AlbumModel, UserModel, TokenModel]
})
export class AlbumModule {}
