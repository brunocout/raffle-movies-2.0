import { RiArrowRightLine } from "react-icons/ri";
import './Navbar.css'

const Navbar = () => {
    return ( 
        <nav className="nav">
            <div className='navbar container'>
                <div className='logo'>
                    <img src="../../../assets/images/logo.png" alt="" />
                </div>
                <div className="menu-container">
                    <ul className='menu'>
                        <li>Suggest me <RiArrowRightLine/></li>
                    </ul>
                </div>
            </div>
        </nav> 
    );
}
 
export default Navbar;