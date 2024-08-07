/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "./CartContext";


const MenuListItems = ({items}) => {

   
    const {addToCart} = useContext(CartContext);

    return (
        <div>
            {items.map((item) => (
                item.card && item.card.info ? (
                    <div key={item.card.info.id} className="menu-info">
                        <div className="menu-text">
                            <span>{item.card.info.name} - </span>
                            <span>₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                        </div>
                        <button onClick={() => addToCart(item)}  className="add-to-cart-button">Add to Cart</button>
                    </div>
                ) : (
                    item.card && item.card.itemCards ? (
                        item.card.itemCards.map((it) => (
                            <div key={it.card.info.id} className="menu-info">
                                <div className="menu-text">
                                    <span>{it.card.info.name} - </span>
                                    <span> ₹ {it.card.info.price/100 || it.card.info.defaultPrice/100}</span>
                                </div>
                                <button className="add-to-cart-button">Add to Cart</button>
                            </div>
                        ))
                    ) : null
                )
            ))}
        </div>
    );
}

export default MenuListItems;

