import { Injectable } from '@nestjs/common';
import carrosdb from './carrosdb';
import { Carro } from './icarros';

@Injectable()
export class CarrosService {

    listAll(){
        return carrosdb
    }

    findById(id:number){
        return carrosdb[id]
    }

    create(c:Carro){

        c.modelo = c.modelo.toUpperCase()
        carrosdb.push(c)
    }

    delete(id:number){

    }

    update(c:Carro){

    }
}
