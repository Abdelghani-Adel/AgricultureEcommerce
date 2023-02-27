import { useState, useEffect } from "react";
import { withTranslation } from "react-multi-lang";

const ProductCount = (props) => {
  // const { Items, total } = props;
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [Items, setItems] = useState([]);
  const [total, settotal] = useState(0);

  // if (total < itemsPerPage) {
  //   itemsPerPage = total;
  // }
  useEffect(() => {
    setItemsPerPage(props.itemsPerPage);
    settotal(props.total);
    setItems(props.Items);
  }, []);
  useEffect(() => {
    setItemsPerPage(props.itemsPerPage);
    settotal(props.total);
    setItems(props.Items);
  }, [props]);
  return (
    <div className="pagination_info">
      <p>
        Showing <b>{itemsPerPage}</b> of <b>{total > 0 ? total : itemsPerPage}</b> products
      </p>
      {/* <form method="post">
        <select className="form-control" name="orderby">
          <option value="default">{props.t("Products.Sort")}</option>
          <option value="latest">Latest release</option>
          <option value="price-down">Price: High - Low</option>
          <option value="price-up">Price: Low - High</option>
          <option value="popularity">Popularity Sorting</option>
        </select>
      </form> */}
    </div>
  );
};

export default withTranslation(ProductCount);
