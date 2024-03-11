const { CarritoCompra } = require('../index');

//constructor(): Inicializa el carrito como un array vacío.
// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
let newCarrito;
describe('La clase CarritoCompra', () => {
    beforeEach(() => {
        newCarrito = new CarritoCompra();
    });
    it('El método constructor inicializa el carrito como un array vacío', () => {
        expect(newCarrito.productos).toEqual([]);
    });
    it('El método agregarProducto(producto): Recibe un objeto representando un producto.', () => {
        let productoInvalido = 'No soy un producto';
        let productoInvalido2 = 10;
        let productoInvalido3;
        expect(() => newCarrito.agregarProducto(productoInvalido)).toThrowError(
            'Producto Inválido'
        );
        expect(() =>
            newCarrito.agregarProducto(productoInvalido2)
        ).toThrowError('Producto Inválido');
        expect(() =>
            newCarrito.agregarProducto(productoInvalido3)
        ).toThrowError('Producto Inválido');
    });
    it('El método agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.', () => {
        let producto = {
            nombre: 'Producto A',
            precio: 100,
            cantidad: 5,
        };
        newCarrito.agregarProducto(producto);
        expect(newCarrito.productos).toEqual([
            { nombre: 'Producto A', precio: 100, cantidad: 5 },
        ]);
    });
    it('El método calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito', () => {
        let productoA = {
            nombre: 'Producto A',
            precio: 100,
            cantidad: 5,
        };
        let productoB = {
            nombre: 'Producto A',
            precio: 150,
            cantidad: 4,
        };
        let productoC = {
            nombre: 'Producto A',
            precio: 120,
            cantidad: 10,
        };
        newCarrito.agregarProducto(productoA);
        newCarrito.agregarProducto(productoB);
        newCarrito.agregarProducto(productoC);
        expect(newCarrito.calcularTotal()).toEqual(2300);
    });
    it('El método calcularTotal(): Debería dar un total de 0 si aun no se han agregado productos', () => {
        expect(newCarrito.calcularTotal()).toBe(0);
    });
    it('El método aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.', () => {
        let productoA = {
            nombre: 'Producto A',
            precio: 100,
            cantidad: 5,
        };
        let productoB = {
            nombre: 'Producto A',
            precio: 150,
            cantidad: 4,
        };
        let productoC = {
            nombre: 'Producto A',
            precio: 120,
            cantidad: 10,
        };
        newCarrito.agregarProducto(productoA);
        newCarrito.agregarProducto(productoB);
        newCarrito.agregarProducto(productoC);

        newCarrito.calcularTotal();
        let porcentaje = 40;
        expect(newCarrito.aplicarDescuento(porcentaje)).toBe(1380);
    });
    it('El método aplicarDescuento(porcentaje): Debería arrojar un error si el porcentaje de descuento es mayor a 100', () => {
        let productoA = {
            nombre: 'Producto A',
            precio: 100,
            cantidad: 5,
        };
        let productoB = {
            nombre: 'Producto A',
            precio: 150,
            cantidad: 4,
        };
        let productoC = {
            nombre: 'Producto A',
            precio: 120,
            cantidad: 10,
        };
        newCarrito.agregarProducto(productoA);
        newCarrito.agregarProducto(productoB);
        newCarrito.agregarProducto(productoC);

        newCarrito.calcularTotal();
        let porcentaje = 110;
        expect(() => newCarrito.aplicarDescuento(porcentaje)).toThrowError(
            'Porcentaje Excede Precio del Producto'
        );
    });
});
