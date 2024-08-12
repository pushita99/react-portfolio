import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/actions/cartActions";
import styles from "./Store.module.css";

const products = [
    { id: 1, name: "Producto 1", price: 10.0 },
    { id: 2, name: "Producto 2", price: 15.0 },
    { id: 3, name: "Producto 3", price: 20.0 },
];

const Store = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.items);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className={styles.container}>
            <h1>Tienda Online</h1>
            <div className={styles.products}>
                {products.map((product) => (
                    <div key={product.id} className={styles.product}>
                        <h2>{product.name}</h2>
                        <p>Precio: ${product.price.toFixed(2)}</p>
                        <button onClick={() => handleAddToCart(product)}>Agregar al Carrito</button>
                    </div>
                ))}
            </div>
            <h2>Carrito</h2>
            <div className={styles.cart}>
                {cartItems.length === 0 ? (
                    <p>El carrito está vacío</p>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.id} className={styles.cartItem}>
                            <p>{item.name} - ${item.price.toFixed(2)}</p>
                            <button onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
                        </div>
                    ))
                )}
            </div>
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    );
};

export default Store;
