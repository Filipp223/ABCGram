import "./Header.css";
import abclogo from "../../img/abclogo2.png";

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={abclogo}></img>
            <h1 className="header__title">ABC-Gram</h1>
        </header>
    )
}

export default Header;