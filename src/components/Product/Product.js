import React from 'react';
import logo from '../images/crema de rostro.jpeg';
import logo from '../images/exfoliante de rostro.jpeg';
import logo from '../images/serum.jpeg';

const product = () => {
    const products = [
        {
            name: 'Crema de Rostro',
            imageSrc: 'ruta/imagen2.jpg',
        },
        {
            name: 'Producto 2',
            imageSrc: 'ruta/imagen2.jpg',
        },
        {
            name: 'Producto 3',
            imageSrc: 'ruta/imagen3.jpg',
        },
        // Puedes agregar más productos aquí
    ];

    const addToCartHandler = (productName) => {
        console.log(`Agregado al carrito: ${productName}`);
        // Aquí puedes implementar la lógica para agregar al carrito
    };

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <Product
                    key={index} // Asegúrate de proporcionar una clave única para cada producto
                    name={product.name}
                    imageSrc={product.imageSrc}
                    onAddToCart={() => addToCartHandler(product.name)}
                />
            ))}
        </div>
    );
};

export default product;

