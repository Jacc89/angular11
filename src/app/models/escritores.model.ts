export class Escritor{
    id: number;
    nombre:string;
    apellidos: string;
    imagen:string;
    pais: string;

    constructor(pNombre:string, pApellidos: string, pImagen:string, pPais:string){
        
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.imagen = pImagen;
        this.pais = pPais;

    }
}