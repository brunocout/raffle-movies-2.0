import { RiArrowRightLine } from "react-icons/ri";
import Button from "../Button/Button";
import './Navbar.css'

const Navbar = () => {
    return ( 
        <nav className="nav">
            <div className='navbar container'>
                <div className='logo'>
                    <Button href="/"><img src="../../../assets/images/logo.png"/></Button>
                </div>
                <div className="menu-container">
                    <ul className='menu'>
                        <li>
                            <Button href="/suggest" className="navlink">Suggest me <RiArrowRightLine/></Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
    );
}
 
export default Navbar;