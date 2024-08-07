
import { Link } from 'react-router-dom';
import icon from '../images/img.png';
import useOnlineStatus from '../components/OnlineStatus';
import { CartContext } from './CartContext';
import { useContext } from 'react';

const Header = () => {

  const onlineStatus = useOnlineStatus();
  const {cart} = useContext(CartContext);

  return (
    <div className="header">
      <div className="web-icon">
        <Link to="/"><img src={icon} className="icon" alt="main-icon" /></Link>
      </div>
      <div className="nav-list">
        <ul>
          <li className='nav1'>
            Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/cart">Cart({cart.length})</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
