import React, { useState } from "react";
import { products } from '../Pet Shop/products'; // Assuming your product data is stored in a separate file
import './Pet Shop.css';
import cartIcon from '../Pet Shop/shopping_cart_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png'

const PetShop = () => {
    const [cartItems, setCartItems] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);

    const addToCart = (product) => {
        const itemExists = cartItems.find(item => item.id === product.id);
        if (itemExists) {
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const handleQuantity = (productId, delta) => {
        setCartItems(cartItems.map(item =>
            item.id === productId
                ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                : item
        ));
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="shop-container">
            <div className="cart-icon-container">
                <img className="cart-icon" src={cartIcon} onClick={() => setCartOpen(!cartOpen)} />
                <div className="cart-count">{cartItems.length}</div>
                
            </div>

            <div className="pet-shop-heading">
                Choose your favourites from our Pet Shop
            </div>

            <div className="products-container">
                {products.map(product => (
                    <div className="product-box" key={product.id}>
                        <img className="product-image" src={product.image} alt={product.name} />
                        <div className="product-info">
                            <div className="product-name">{product.name}</div>
                            <div className="product-price">Rs {product.price}</div>
                        </div>
                        <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>

            {cartOpen && (
                <div className="cart-slide">
                    <h2>Here's your cart</h2>
                    <ul>
                        {cartItems.map(item => (
                            <div key={item.id}>
                                <div className="cart-item-description">{item.name} - Rs {item.price} x {item.quantity}</div>
                                <div className="quantity-controls">
                                    <button className="cart-item-add-button" onClick={() => handleQuantity(item.id, -1)}>-</button>
                                    <button className="cart-item-add-button" onClick={() => handleQuantity(item.id, 1)}>+</button>
                                    <button className="cart-remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div> 
                            </div>
                        ))}
                    </ul>
                    <div className="cart-total">
                        Total: Rs {totalPrice}
                    </div>
                    <div className="cart-actions">
                        <button className="checkout">Checkout</button>
                        <button className="cancel" onClick={() => setCartOpen(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PetShop;
