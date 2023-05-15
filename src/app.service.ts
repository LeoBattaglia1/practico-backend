import { Injectable } from '@nestjs/common';
import { Pelicula } from './app.entity';
import { v4 } from 'uuid';

@Injectable()
export class AppService {
    private apiPelicula: Pelicula[] = [];
  
    constructor() {
      const pelicula = new Pelicula(
        "100",
        "Argentina 1985",
        "Darin",
        "Drama",
        "sobre la dictadura",
        "2 hs",
        "03/12/22"
      );
      this.apiPelicula.push(pelicula);
    }


    getAllPeliculas(){
        return this.apiPelicula
    }


    crearPelicula(id: string, titulo: string, actores: string, genero: string, sinopsi: string, duracion: string, fecha_lanzamiento: string) {
        const pelicula = new Pelicula(
            v4(),
            titulo,
            actores,
            genero,
            sinopsi,
            duracion,
            fecha_lanzamiento,
        );
        this.apiPelicula.push(pelicula);
        return pelicula;
        }
        

    getPeliculaId(id: string): Pelicula {
    const pelicula = this.apiPelicula.find((pelicula) => pelicula.id === id);
        return pelicula;
    }
    

    deletePelicula(id:string){
        this.apiPelicula = this.apiPelicula.filter(pelicula=> pelicula.id !== id)
    }
    

    updatePelicula(peliculaNueva: any, id: string): string{
        let index = this.apiPelicula.findIndex(pelicula => pelicula.id == id);
            if (index != -1) {
            let peliculaExistente = this.apiPelicula[index];
            peliculaExistente.setTitulo(peliculaNueva.titulo);
            peliculaExistente.setActores(peliculaNueva.actores);
            peliculaExistente.setGenero(peliculaNueva.genero);
            peliculaExistente.setSinopsi(peliculaNueva.sinopsi);
            peliculaExistente.setDuracion(peliculaNueva.duracion);
            peliculaExistente.setFecha_lanzamiento(peliculaNueva.sinopsi);
            return "ok";
            } else {
            return "404";
            }
    }  
}


