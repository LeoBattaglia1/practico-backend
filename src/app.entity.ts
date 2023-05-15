export class Pelicula {
    id:string
    titulo:string
    actores:string
    genero:string
    sinopsi: string
    duracion: string
    fecha_lanzamiento:string

    constructor (id: string, titulo: string, actores:string, genero:string,sinopsi:string, duracion:string, fecha_lanzamiento:string){
        this.id=id
        this.titulo=titulo
        this.actores=actores
        this.genero=genero
        this.sinopsi=sinopsi
        this.duracion=duracion
        this.fecha_lanzamiento=fecha_lanzamiento

    }

    toString():string{
        return `${this.titulo}, ${this.genero}, ${this.sinopsi}, ${this.actores}, ${this.duracion},${this.fecha_lanzamiento} `
    }

    setId(nuevoId:string):void{
        this.id=nuevoId;
    }

   setTitulo(nuevoTitulo:string):void{
        this.titulo=nuevoTitulo;
    }

    setActores(nuevoActores:string):void{
        this.actores=nuevoActores;
    }

    setGenero(nuevoGenero:string):void{
        this.genero=nuevoGenero;
    }

    setSinopsi(nuevoSinopsi:string):void{
        this.sinopsi=nuevoSinopsi;
    }

    setDuracion(nuevoDuracion:string):void{
        this.duracion=nuevoDuracion;
    }

    setFecha_lanzamiento(nuevoFecha_lanzamiento:string):void{
        this.fecha_lanzamiento=nuevoFecha_lanzamiento;
    }  
}

