import Link from "next/link";
import MobileViewNavToggler from "./MobileViewNavToggler";
import LanguageChange from "../LanguageChange";
import { FaShoppingBasket, FaRegHeart, FaUserAlt, FaCommentAlt } from "react-icons/fa";

const HeaderControls = (props) => {
  return (
    <div className="andro_header-controls">
      <ul className="andro_header-controls-inner">
        <li className="andro_header-favorites">
          <Link href="/chat" title="Chat">
            <FaCommentAlt />
          </Link>
        </li>
        <li className="andro_header-favorites">
          <Link href="/vendor-registration" title="Vendor Registration">
            <FaUserAlt />
          </Link>
        </li>
        <li className="andro_header-favorites">
          <Link href="/wishlist" title="Wish List">
            <FaRegHeart />
          </Link>
        </li>
        <li className="andro_header-cart">
          <Link href="/cart" title="Cart">
            <FaShoppingBasket />
            <div className="andro_header-cart-content">
              <span>9 Items</span>
              <span>249.99$</span>
            </div>
          </Link>
        </li>
        <LanguageChange changeLang={props.changeLang} lang={props.lang} />
      </ul>
      <MobileViewNavToggler />
    </div>
  );
};

export default HeaderControls;
