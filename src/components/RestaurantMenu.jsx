import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";
import RestaurantCategory from "./Restaurantcategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <ShimmerUI />;

    const { name, cuisines, avgRating, costForTwoMessage } = resInfo.cards[2].card.card.info;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || 
        c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" );


    return (
        <>
            <div className="menu">
                <div className="restaurant-details">
                    <h3>{name}</h3>
                    <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
                    <p>{avgRating} ⭐</p>
                </div>
                
            </div>


            <div className="restaurant-menu">
                {categories.map((category, index) => (
                    <RestaurantCategory key={index} data={category?.card?.card}/>
                ))}
            </div>
        </>
    );
};

export default RestaurantMenu;


