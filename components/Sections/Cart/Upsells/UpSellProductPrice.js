const UpSellProductPrice = (props) => {
  const { item } = props;
  return (
    <div className="andro_product-price">
      {item.discount > 0 || item.discount !== "" ? (
        <span>
          {new Intl.NumberFormat().format(
            ((item.price * (100 - item.discount)) / 100).toFixed(2)
          )}
          $
        </span>
      ) : (
        ""
      )}
      <span>{new Intl.NumberFormat().format(item.price.toFixed(2))}$</span>
    </div>
  );
};

export default UpSellProductPrice;
