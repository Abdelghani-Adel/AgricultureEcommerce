const ProductInfoTotals = ({ price, quantity }) => {
  return (
    <div className="product_info--totals">
      <div className="d-flex justify-content-between">
        <p>Unit Price:</p>
        <p>{price}</p>
      </div>
      <div className="d-flex justify-content-between fw-bolder text-dark">
        <p>Total</p>
        <p>{price * quantity}</p>
      </div>
    </div>
  );
};

export default ProductInfoTotals;
