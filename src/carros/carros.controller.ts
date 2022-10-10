import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { CarrosService } from './carros.service';
import { Carro } from './icarros';

@Controller('carros')
export class CarrosController {

    constructor(private service:CarrosService){
    }

    @Get(":id")
    listById(@Param("id") id:number){
        return this.service.findById(id)
    }

    @Get()
    listAll(){
        return this.service.listAll()
    }

    @Post()
    create(@Body() c:Carro){
        return this.service.create(c)
    }

    @Delete(":id")
    delete(@Param("id") id:number){
        return 'devo deletar um carro'
    }

    @Put(":id")
    update(@Param() c:any){
        return 'devo atualizar um carro'
    }
}
