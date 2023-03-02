import { Fragment } from "react";
import Breadcrumbs from "../../components/Reusable_Components/Breadcrumbs";
import WishlistShare from "../../components/Sections/Wishlist/WishlistShare";
import WishlistTable from "../../components/Sections/Wishlist/WishlistTable";

const pagelocation = "Wishlist";

const WishList = (props) => {
  return (
    <Fragment>
      <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
      <div className="section">
        <div className="container">
          {/* <WishlistTable />
          <WishlistShare /> */}
        </div>
      </div>
    </Fragment>
  );
};

export default WishList;
