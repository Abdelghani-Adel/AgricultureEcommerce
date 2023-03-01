const ProductGifts = ({ gifts }) => {
  return (
    <div className="border_2 border_primary product_offers">
      {/* <h6 className="mt-2 mb-2 text-center">Offers</h6> */}
      <div className="row m-0">
        <div className="col-6">
          <h6 className="mb-2 mt-2">Range</h6>
        </div>
        <div className="col-1">
          <h6 className="mb-2 mt-2">Free</h6>
        </div>
        <div className="col-2">
          <h6 className="mb-2 mt-2">UOM</h6>
        </div>
        <div className="col-3">
          <h6 className="mb-2 mt-2">Product</h6>
        </div>
      </div>
      {gifts.map((gift) => (
        <div key={gift.free} className="row m-0 ps-1 pe-1 border_1 border-dark mb-1 rounded">
          <div className="col-6">
            <p>{gift.Range}</p>
          </div>
          <div className="col-1">
            <p className="fw-bold txt-primary">{gift.Free}</p>
          </div>
          <div className="col-2">
            <p>{gift.UOM}</p>
          </div>
          <div className="col-3">
            <p>{gift.Product}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGifts;
