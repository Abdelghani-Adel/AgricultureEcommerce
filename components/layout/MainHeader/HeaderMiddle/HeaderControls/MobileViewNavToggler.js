import Link from "next/Link";
import { useEffect, useState } from "react";
import { fetchCategoriesMenu } from "../../../../../services/categoryServices";
import { FaCommentAlt, FaRegHeart, FaShoppingBasket, FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { signOut, useSession } from "next-auth/react";
import ProfileAuthController from "./ProfileAuthController/ProfileAuthController";
import CartController from "./CartController";

const MobileViewNavToggler = (props) => {
  const cartState = useSelector((state) => state.cart);
  const session = useSession();
  const [navIsShown, setNavIsShown] = useState(false);

  const clickHandler = () => setNavIsShown(!navIsShown);

  const [categories, setCategories] = useState();

  useEffect(() => {
    const getCategories = async () => {
      const categories = await fetchCategoriesMenu("ar");
      setCategories(categories);
    };
    getCategories();
  }, []);

  return (
    <>
      <div className="header_control aside-toggler" onClick={clickHandler}>
        <span />
        <span />
        <span />
      </div>

      {navIsShown && (
        <div className="mobilemenu-overlay" onClick={clickHandler}>
          <div className="mobile_nav">
            <div className="row justify-content-between">
              {/* <div className="col-6">
                <li className="header_control main_header-cart bg-white">
                  <CartController />
                </li>
              </div> */}
              <div className="col-8">
                <ul className="header_control me-2 bg-white">
                  <ProfileAuthController mobileView={true} />
                </ul>
              </div>
            </div>

            <h4 className="text-center text-white mt-5">Categories</h4>

            <div className="tagcloud">
              {categories &&
                categories.map((category) => (
                  <Link
                    key={category.FAClassificationId}
                    href={`/categories/${category.FAClassificationSlug}?id=${category.FAClassificationId}`}
                  >
                    {category.FAClassificationName}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileViewNavToggler;
