import Link from "next/Link";
import { withTranslation } from "react-multi-lang";

const WishlistShare = (props) => {
  return (
    <div className="text-center">
      <h5>{props.t("Wishlist.Share")}</h5>
      <div className="andro_post-share">
        <ul className="andro_sm justify-content-center">
          <li>
            <Link href="#">
              <i className="fa fa-facebook-f" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <i className="fa fa-twitter" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <i className="fa fa-linkedin" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withTranslation(WishlistShare);
