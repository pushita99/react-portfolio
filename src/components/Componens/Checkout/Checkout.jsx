import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import styles from "./Checkout.module.css";

const stripePromise = loadStripe("YOUR_PUBLIC_STRIPE_KEY"); // Reemplaza con tu clave pública de Stripe

const Checkout = () => {
    const cartItems = useSelector((state) => state.items);
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    const handleCheckout = async () => {
        const stripe = await stripePromise;

        // Simulación de pago (aquí deberías hacer una llamada a tu backend para crear una sesión de pago)
        const { error } = await stripe.redirectToCheckout({
            lineItems: cartItems.map(item => ({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: item.price * 100, // El precio en centavos
                },
                quantity: 1,
            })),
            mode: 'payment',
            successUrl: window.location.origin + '/success',
            cancelUrl: window.location.origin + '/cancel',
        });

        if (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Checkout</h1>
            <h2>Total: ${total.toFixed(2)}</h2>
            <button onClick={handleCheckout}>Pagar</button>
        </div>
    );
};

export default Checkout;
