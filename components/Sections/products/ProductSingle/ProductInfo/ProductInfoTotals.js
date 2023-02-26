const ProductInfoTotals = ({ price, quantity }) => {
  return (
    <div className="product_info--totals">
      {/* <div className="d-flex justify-content-between">
        <p>Unit Price:</p>
        <p>{price}</p>
      </div> */}
      <div className="mt-2">
        <h4>Total: {price * quantity}</h4>
      </div>
    </div>
  );
};

export default ProductInfoTotals;
