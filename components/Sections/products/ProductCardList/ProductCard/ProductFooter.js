import Link from "next/Link";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { withTranslation } from "react-multi-lang";
import AddToCart from "../../AddToCart";
import { useDispatch } from "react-redux";
import { loaderActions } from "../../../../../redux/slices/loaderSlice";

const ProductFooter = (props) => {
  const { product } = props;
  const session = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const [likeButtonChecked, setLikeButtonChecked] = useState(false);
  const [unlikeButtonChecked, setUnlikeButtonChecked] = useState(false);

  const showLoader = () => {
    dispatch(loaderActions.showLoader());
  };

  const likeHandler = async (e) => {
    e.preventDefault();
    if (session.status != "authenticated") {
      router.push("/login");
      return;
    }

    const actionType = e.target.dataset.type;

    let requestBody = {
      Review_Id: 0,
      Company_Id: 0,
      Item_Id: product.Item_Id,
      Cust_Id: 0,
      Review_Num: 0,
      Review_Comment: "string",
      isLike: 0,
      Computer_Name: "string",
      Active: true,
      Cust_Name: "string",
      // delete: true,
    };

    if (actionType == "like") {
      requestBody = {
        ...requestBody,
        isLike: 1,
        // delete: likeButtonChecked,
      };

      setLikeButtonChecked((prev) => {
        return !prev;
      });
    }

    if (actionType == "unLike") {
      requestBody = {
        ...requestBody,
        isLike: 2,
        // delete: unlikeButtonChecked,
      };

      setUnlikeButtonChecked((prev) => {
        return !prev;
      });
    }
  };

  return (
    <div className="product_card--footer">
      <div className="product_card--buttons">
        <AddToCart style={"product_footer--button"} item={product} />

        <button className="like_button" onClick={showLoader}>
          <Link
            href={props.productPath}
            data-toggle="tooltip"
            data-placement="top"
            title={props.t("Products.ViewDetails")}
          >
            <FaRegEye />
          </Link>
        </button>

        <button
          className={`like_button ${likeButtonChecked ? "checked" : ""}`}
          data-type="like"
          title={props.t("Products.Likes")}
          onClick={likeHandler}
        >
          <BiLike /> {`(${product.isLike})`}
        </button>

        <button
          className={`like_button ${unlikeButtonChecked ? "checked" : ""}`}
          data-type="unLike"
          title={props.t("Products.Likes")}
          onClick={likeHandler}
        >
          <BiDislike /> {`(${product.UnLike})`}
        </button>
      </div>
    </div>
  );
};

export default withTranslation(ProductFooter);
