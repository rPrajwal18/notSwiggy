/* eslint-disable react/prop-types */

import { useState } from "react";
import MenuListItems from "./MenuItemList";



const RestaurantCategory = ({data}) => {

    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    }

    return(
        <>
        <div className="menu-details">
            <div className="menu-headers" onClick={handleClick}>
                <span className="menu-title">{data.title}</span>
                <span >{"🔽"}</span>
            </div>
        </div>

        
       {showItems && <MenuListItems items={data.itemCards || data.categories}/>} 
        </>
    );
}

export default RestaurantCategory;