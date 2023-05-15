import { Body, Controller, Get, Post, Delete, Put, Param, ParseUUIDPipe} from '@nestjs/common';
import { AppService } from './app.service';
import { Pelicula } from './app.entity';

@Controller('api')
export class AppController {

    constructor(private appService: AppService){}
  @Get()
    getPeliculas(){
        return this.appService.getAllPeliculas()
    }
 
     

  @Post()
    crearPelicula(@Body() newPelicula: Pelicula){ 
        return this.appService.crearPelicula(newPelicula.id, newPelicula.titulo, newPelicula.actores,
        newPelicula.genero, newPelicula.sinopsi, newPelicula.duracion, newPelicula.fecha_lanzamiento)
        
    }


    @Get(":id") 
    getPeliculaId(
    @Param("id", ParseUUIDPipe)
    id: string,): Pelicula {
    return this.appService.getPeliculaId(id);
    }


    @Delete(':id')
    deletePelicula(@Param('id') id: string) {
      this.appService.deletePelicula(id);
      return 'Pelicula eliminada correctamente.';
    }

 @Put(':id')
public update(@Body() pelicula : any, @Param('id') id : string) : string {
return this.appService.updatePelicula(pelicula, id);
}  
  }