import React from 'react';
import Item from '../ItemListContainer'; 

const ItemListContainer = () => {

  const products = [
    {
      id: 1,
      title: 'Producto 1',
      price: 10,
      image: '<" />',
    },
    {
      id: 2,
      title: 'Producto 2',
      price: 20,
      image: 'ruta/a/tu/imagen2.png',
    },
  ];

  return (
    <div>
      {products.map((product) => (
        <Item
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
