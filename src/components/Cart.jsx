
import { useContext } from "react";
import { CartContext } from "./CartContext";
import trashIcon from "../images/trash-solid.svg";

const Cart = () => {
    const { cart, clearCart, removeFromCart } = useContext(CartContext);

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h2>Cart</h2>
                <button onClick={clearCart} className="clear-cart-button">Clear Cart</button>
            </div>

            {cart.length === 0 ? (
                <p style={{textAlign:"center", marginTop:"10rem"}}>Your cart is empty.</p>
            ) : (
                cart.map((item, index) => (
                    <div key={index} className="cart-item">
                        <div>
                        <span>{item.card.info.name} - </span>
                        <span> ₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                        </div>
                        <button onClick={() => removeFromCart(item.card.info.id)} className="remove-cart-item-button">
                            <img src={trashIcon} alt="Remove" />
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;

