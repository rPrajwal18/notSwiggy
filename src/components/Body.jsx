import  { useState, useEffect } from 'react'
import Card from './Card'
import ShimmerUI from './ShimmerUI'
import { Link } from 'react-router-dom'
import useOnlineStatus from './OnlineStatus'
import icon2 from "../images/arrow-left-solid.svg"

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([])
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchData()
  }, []); 

  const fetchData = async () => {
    const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const json = await data.json()

    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const handleSearch = () => {
    const filteredData = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredRestaurant(filteredData)
  }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus == false){
    <h1 style={{marginTop:"5rem"}}>Looks like have gone off the grid without any connection.🤦‍♂️</h1>
  }

  return listOfRestaurant.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="search">
      <Link to="/"><button className='left-arrow' ><img src={icon2}/></button></Link>
        <input
          className="search-bar"
          type="text"
          placeholder="Search restaurants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="rest-cards">
        {filteredRestaurant.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id} className="link-no-underline">
            <Card
              image={restaurant.info.cloudinaryImageId}
              title={restaurant.info.name}
              cuisine={restaurant.info.cuisines.join(', ')}
              rating={restaurant.info.avgRating + '⭐'}
              delivery={restaurant.info.sla.deliveryTime + ' mins'}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Body
