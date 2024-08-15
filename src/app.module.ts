import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { CatsService } from './cats/cats.service';
import { CatService } from './cat/cat.service';

@Module({
  imports: [],
  controllers: [AppController, CatController],
  providers: [AppService, CatsService, CatService],
})
export class AppModule {}
