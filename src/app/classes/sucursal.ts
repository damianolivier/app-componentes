export class Sucursal {
    constructor(
        public _nombre: string,
        public _lugar: string,
        public _ventaspormes: Array<number>,
        public _telefono:string
    ) { }

    get nombre(): string { // get por defecto
        return this._nombre;
    }

    set nombre(name: string) { // set por defecto
        this._nombre = name;
    }

    get lugar(): string { // get por defecto
        return this._lugar;
    }

    set lugar(lugar: string) { // set por defecto
        this._lugar = lugar;
    }

    setVentasMes(ventas: number, mes: number) {
        if(mes > 0 && ventas >= 0) {
            this._ventaspormes[mes] = ventas;
        }
    }

    getVentasMes(mes) {
        return this._ventaspormes[mes];
    }

    get ventas() {
        return this._ventaspormes;
    }

}