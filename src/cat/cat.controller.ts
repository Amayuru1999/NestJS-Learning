import { Controller, Get, Post, Req,HttpCode } from '@nestjs/common';

@Controller('cat')
export class CatController {


    @Post()
    @HttpCode(204)
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
