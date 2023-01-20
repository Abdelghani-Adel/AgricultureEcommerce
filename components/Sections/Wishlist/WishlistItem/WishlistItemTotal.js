const WishlistItemTotal = (props) => {
  const { item } = props;
  return (
    <td data-title="Total">
      <strong>
        {new Intl.NumberFormat().format((item.qty * item.price).toFixed(2))}$
      </strong>
    </td>
  );
};

export default WishlistItemTotal;
