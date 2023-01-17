import Link from "next/link";
import MobileViewNavToggler from "./MobileViewNavToggler";
import {
  FaShoppingBasket,
  FaRegHeart,
  FaUserAlt,
  FaCommentAlt,
} from "react-icons/fa";

const HeaderControls = (props) => {
  return (
    <div className="andro_header-controls">
      <ul className="andro_header-controls-inner">
        <li className="andro_header-favorites">
          <Link href="/wishlist" title={"Navbar.WishList"}>
            <FaCommentAlt />
          </Link>
        </li>
        <li className="andro_header-favorites">
          <Link href="/wishlist" title={"Navbar.WishList"}>
            <FaUserAlt />
          </Link>
        </li>
        <li className="andro_header-favorites">
          <Link href="/wishlist" title={"Navbar.WishList"}>
            <FaRegHeart />
          </Link>
        </li>
        <li className="andro_header-cart">
          <Link href="/cart" title={"Navbar.YourCart"}>
            <FaShoppingBasket />
            <div className="andro_header-cart-content">
              <span>9 Items</span>
              <span>249.99$</span>
            </div>
          </Link>
        </li>
      </ul>
      <MobileViewNavToggler />
    </div>
  );
};

export default HeaderControls;
