
import { NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
       <span>My Website</span>
            <nav className="text-xl">
    <NavLink to="/" className="mr-5">Home</NavLink>
    <NavLink to="/about" className="mr-5">About</NavLink>

    <NavLink to="/contact" className="mr-5">Contact Us</NavLink>
    <NavLink to='/post' className="mr-5">Post</NavLink>
    {/* <Link to='/users'>Users</Link> */}
    <NavLink to='/users'>Users</NavLink>
</nav>

        </div>
    );
};

export default Header;