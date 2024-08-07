import { useEffect, useState } from "react";

const useRestauranrMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    
    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchData = async () =>{
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);

        const json = await response.json();

        setResInfo(json?.data);
    }
    
    return resInfo;


}

export default useRestauranrMenu;