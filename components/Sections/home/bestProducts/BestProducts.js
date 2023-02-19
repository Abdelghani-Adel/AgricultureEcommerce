import React, { Component, Fragment } from "react";
import { withTranslation } from "react-multi-lang";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { fetchBestProducts } from "../../../../services/productServices";
import ProductSlider from "../../../layout/Reusable/ProductSlider";

class BestProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const getProducts = async () => {
      const products = await fetchBestProducts("ar");
      this.setState({ products: products });
    };
    getProducts();
  }

  render() {
    return (
      <Fragment>
        {this.state.products && this.state.products.length > 0 && (
          <ProductSlider
            translateTitle={"Products.BestProducts"}
            products={this.state.products}
            slidesToShow={4}
          />
        )}
      </Fragment>
    );
  }
}

export default withTranslation(BestProducts);
