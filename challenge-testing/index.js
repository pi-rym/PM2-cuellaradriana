class CarritoCompra {
    constructor() {
        this.productos = [];
    }
    agregarProducto(producto) {
        if (typeof producto !== 'object' || typeof producto === null)
            throw Error('Producto Inválido');
        this.productos.push(producto);
    }
    calcularTotal() {
        let resultado = this.productos.reduce(
            (total, producto) => total + producto.precio * producto.cantidad,
            0
        );
        return resultado;
    }
    aplicarDescuento(porcentaje) {
        if (porcentaje > 100)
            throw Error('Porcentaje Excede Precio del Producto');
        let descuento = porcentaje / 100;
        let totalFinal = this.calcularTotal() * (1 - descuento);
        return totalFinal;
    }
}

module.exports = { CarritoCompra };
