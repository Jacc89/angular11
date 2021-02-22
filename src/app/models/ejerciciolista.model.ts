export class listaProducto{

    nombre:string;
    cantidad: number;
    departamento:string;

    constructor(pNombre:string='', pDepartamento: string='', pCantidad:number=0){
        
        this.nombre = pNombre;
        this.cantidad = pCantidad;
        this.departamento = pDepartamento;

    }
}