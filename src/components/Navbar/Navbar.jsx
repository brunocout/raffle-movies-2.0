import { RiArrowRightLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import './Navbar.css'

const Navbar = () => {

    const navigate = useNavigate()

    return ( 
        <nav className="nav">
            <div className='navbar container'>
                <div className='logo'>
                    <Button component="button" onClick={() => navigate('/raffle-movies-website/')}>
                        <img src="src/assets/images/logo.png"/>
                    </Button>
                </div>
                <div className="menu-container">
                    <ul className='menu'>
                        <li>
                            <Button component="button" className="navlink" onClick={() => navigate('/raffle-movies-website/suggest')} >Suggest me <RiArrowRightLine/>
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
    );
}
 
export default Navbar;