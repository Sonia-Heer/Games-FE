import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="Nav">
            <Link className="nav-link" to="/">
                Home
            </Link>
            <Link className="nav-link" to="/reviews">
                Reviews
            </Link>
        </nav>
    )
}

export default Nav;