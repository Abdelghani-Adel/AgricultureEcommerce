const WishlistItemPrice = (props) => {
  const { item } = props;
  return (
    <td data-title="Price">
      <strong>{new Intl.NumberFormat().format(item.price.toFixed(2))}$</strong>
    </td>
  );
};

export default WishlistItemPrice;
