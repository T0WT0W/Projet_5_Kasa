import { Link } from "react-router-dom"
import logo from "../assets/LogoNav.png"

const Navbar = ({ pageActive }) => {

    return (<>
        <nav className="nav">
            <div className="nav__logo">
                <img alt="Lorem ipsum" src={logo} />
            </div>
            <div className="nav__links">
                <Link className={["nav__item", (pageActive === "Home") ? "active" : ""].join(" ")} to={"/"}>Accueil</Link>
                <Link className={["nav__item", (pageActive === "About") ? "active" : ""].join(" ")} to={"/about"}>À propos</Link>
            </div>
        </nav>
    </>)
}

export default Navbar