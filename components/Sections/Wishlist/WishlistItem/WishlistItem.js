import WishlistItemActions from "./WishlistItemActions";
import WishlistItemAvailability from "./WishlistItemAvailability";
import WishlistItemPrice from "./WishlistItemPrice";
import WishlistItemProduct from "./WishlistItemProduct";
import WishlistItemRemoveBtn from "./WishlistItemRemoveBtn";
import WishlistItemTotal from "./WishlistItemTotal";

const WishlistItem = (props) => {
  const { item } = props;
  return (
    <tr>
      <WishlistItemRemoveBtn />
      <WishlistItemProduct item={item} />
      <WishlistItemPrice item={item} />
      <WishlistItemAvailability item={item} />
      <WishlistItemTotal item={item} />
      <WishlistItemActions />
    </tr>
  );
};

export default WishlistItem;
