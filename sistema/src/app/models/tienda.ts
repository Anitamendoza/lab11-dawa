export class Tienda {
    _id?: string;
    departamento: string;
    distrito: string;
    cantidad: number;
  
    constructor(departamento: string, distrito: string, cantidad: number) {
      this.departamento = departamento;
      this.distrito = distrito;
      this.cantidad = cantidad;
    }
  }
  