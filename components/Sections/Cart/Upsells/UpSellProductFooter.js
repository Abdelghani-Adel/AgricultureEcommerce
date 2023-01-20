import Link from "next/Link";
import { withTranslation } from "react-multi-lang";

const UpSellProductFooter = (props) => {
  const { itemID } = props;
  return (
    <div className="andro_product-footer">
      <div className="andro_product-buttons">
        <Link
          href={"/product-single/" + itemID}
          className="andro_btn-custom primary"
        >
          {props.t("Products.AddToCart")}
        </Link>
        <Link
          href="#"
          className="andro_btn-custom light"
          // onClick={this.modalShow}
        >
          Quick View
        </Link>
      </div>
    </div>
  );
};

export default withTranslation(UpSellProductFooter);
