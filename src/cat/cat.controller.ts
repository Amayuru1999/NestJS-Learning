import { Controller, Get, Post, Req } from '@nestjs/common';

@Controller('cat')
export class CatController {


    @Post()
    create():string{
        return '🟢 Post request is working';
    }

    @Get()
    findAll(@Req() request:Request): string {
        
        return '🟢 Get request is working';
    }

    //Route wild card
    @Get('**')
    findAllWithWildCard(){
        return '🔴 404 Not Found';
    }
}
