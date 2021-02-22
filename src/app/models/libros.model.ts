export class Libro{
    id: number;
    titulo: string;
    imagen: string;
    publicado: number;
    escritor: number;

    constructor(pNombre:string, pTitulo: string, pImagen:string, pPublicado:number, pEscritor: number){
        
        this.titulo = pTitulo;
        this.imagen = pImagen;
        this.publicado = pPublicado;
        this.escritor = pEscritor
        ;

    }
}