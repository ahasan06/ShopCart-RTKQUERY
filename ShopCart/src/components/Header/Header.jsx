import { Link } from "react-router-dom";

import './header.css'
import { useSelector } from "react-redux";

const Header = () => {
    const cart  = useSelector(shopCart=>shopCart.cart)
    return (
        <>
            <div className="header__section">
                <nav className="header__container">
                    <ul className="nav__list">

                        <li className="nav__item">
                            <Link className="nav__link" to={"/"}>Shop</Link>
                        </li>
                        <li className="nav__item">
                            <Link className="nav__link"to={"adminProduct"}>Admin Products</Link>
                        </li>

                        <li className="nav__item">
                            <Link className="nav__link" to={"cart"}>Cart ({cart.length})</Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;