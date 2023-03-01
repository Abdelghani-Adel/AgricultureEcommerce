import { withTranslation } from "react-multi-lang";

const ProductGifts = (props) => {
  // console.log("props " ,props);
  return (
    // <div className="border_2 border_primary product_offers">
    <div className="product_offers">
  
      <div className="row m-0">
        <div className="col-6">
          <h6 className="mb-2 mt-2">{props.t("Products.Range")}</h6>
        </div>
        <div className="col-3">
          <h6 className="mb-2 mt-2">{props.t("Products.Free")}</h6>
        </div>
        <div className="col-3">
          <h6 className="mb-2 mt-2">{props.t("Products.UOM")}</h6>
        </div>
        {/* <div className="col-3">
          <h6 className="mb-2 mt-2">{props.t("Product.Product")}</h6>
        </div> */}
      </div>
      <hr/>
      {props.gifts.map((gift) => (
        // <div key={gift.free} className="row m-0 ps-1 pe-1 border_1 border-dark mb-1 rounded">
       
        <div key={gift.free} className="row m-0 ps-1 pe-1 mb-1 gift_row">
          <div className="col-6">
            <p>{gift.Range}</p>
          </div>
          <div className="col-3">
            <p className="fw-bold txt-primary">{gift.Free}</p>
          </div>
          <div className="col-3">
            <p>{gift.UOM}</p>
          </div>
          {/* <div className="col-3">
            <p>{gift.Product}</p>
          </div> */}
        </div>
       
      ))}
    </div>
  );
};

export default withTranslation(ProductGifts);
