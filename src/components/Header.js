import logo from './logo.png'
import { Link } from "react-router-dom";
import './css/Header.css'

const Header = () => {
    return ( 
        <div className='header'>
            <Link
              to={'/'}
              className="header"
              key={logo}
            >
        <img src={logo} alt="logo" className='logo'/>
        </Link>
        </div>
     );
}
 
export default Header;