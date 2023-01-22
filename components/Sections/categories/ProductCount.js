import { useState } from "react";
import { withTranslation } from "react-multi-lang";

const ProductCount = (props) => {
  const { Items } = props;
  const [itemsPerPage] = useState(6);

  return (
    <div className="andro_shop-global">
      <p>
        Showing <b>{itemsPerPage}</b> of <b>{Items.length}</b> products{" "}
      </p>
      <form method="post">
        <select className="form-control" name="orderby">
          <option value="default">{props.t("Products.Sort")}</option>
          <option value="latest">Latest release</option>
          <option value="price-down">Price: High - Low</option>
          <option value="price-up">Price: Low - High</option>
          <option value="popularity">Popularity Sorting</option>
        </select>
      </form>
    </div>
  );
};

export default withTranslation(ProductCount);
