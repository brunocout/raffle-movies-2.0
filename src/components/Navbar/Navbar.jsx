import './Navbar.css'

const Navbar = () => {
    return ( 
        <nav className="nav">
            <div className='navbar container'>
                <div className='logo'>
                    <h1>RM</h1>
                </div>
                <div className="menu-container">
                    <ul className='menu'>
                        <li>Suggest me</li>
                    </ul>
                </div>
            </div>
        </nav> 
    );
}
 
export default Navbar;