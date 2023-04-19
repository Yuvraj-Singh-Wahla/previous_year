import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="navo">
            <Link to = "/login">
                Login
            </Link>
        </div>
    )
} 

export default Header;