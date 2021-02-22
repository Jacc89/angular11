export class Producto{

    nombre:string;
    imgUrl: string;
    precio:number;
    cantidad: number;

    constructor(pNombre:string, pImgUrl: string, pPrecio:number){
        
        this.nombre = pNombre;
        this.imgUrl = pImgUrl;
        this.precio = pPrecio;
        this.cantidad = 0;

    }
}