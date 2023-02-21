import { getSession, useSession } from "next-auth/react";
import Link from "next/Link";
import { useEffect, useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import { useDispatch } from "react-redux";
import {
  setInitialLikeState,
  setInitLikes,
  storeLikeInCookie,
} from "../../../../../helper/cookiesHandlers";
import { loaderActions } from "../../../../../redux/slices/loaderSlice";
import { UPSproductLikes } from "../../../../../services/productServices";
import AddToCart from "../../AddToCart";

const ProductFooter = (props) => {
  const [likes, setLikes] = useState(0);
  const [unLikes, setUnlikes] = useState(0);
  const [likeButtonChecked, setLikeButtonChecked] = useState(false);
  const [unlikeButtonChecked, setUnlikeButtonChecked] = useState(false);

  const { product } = props;
  const session = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    setInitialLikeState(product, setLikeButtonChecked, setUnlikeButtonChecked);
  }, []);

  useEffect(() => {
    const dbLikes = product.isLike;
    const dbUnLikes = product.UnLike;
    const prod_Id = product.Item_Id;
    setInitLikes(dbLikes, dbUnLikes, prod_Id, setLikes, setUnlikes);
  }, []);

  const likeHandler = async (e) => {
    const actionType = e.currentTarget.dataset.type;
    const authenticated = session.status == "authenticated";

    let requestBody = {
      Item_Id: product.Item_Id,
      isLike: 0,
      Review_Id: 0,
      Company_Id: 0,
      Cust_Id: 0,
      Review_Num: 0,
      Review_Comment: "string",
      Computer_Name: "string",
      Active: true,
      Cust_Name: "string",
      lang: "string",
    };

    if (actionType == "like") {
      if (!authenticated) {
        setLikes((prev) => (likeButtonChecked ? prev - 1 : prev + 1));
        setUnlikes((prev) => (unlikeButtonChecked ? prev - 1 : prev));
      }
      requestBody.isLike = 1;
      setLikeButtonChecked((prev) => !prev);
      setUnlikeButtonChecked(false);
    }
    if (actionType == "unLike") {
      if (!authenticated) {
        setUnlikes((prev) => (unlikeButtonChecked ? prev - 1 : prev + 1));
        setLikes((prev) => (likeButtonChecked ? prev - 1 : prev));
      }
      requestBody.isLike = 2;
      setUnlikeButtonChecked((prev) => !prev);
      setLikeButtonChecked(false);
    }

    if (!authenticated) {
      storeLikeInCookie(product.Item_Id, actionType);
      return;
    }

    const result = await UPSproductLikes(requestBody);
    setLikes(result.isLike);
    setUnlikes(result.UnLike);
  };

  const showLoader = () => {
    dispatch(loaderActions.showLoader());
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
          <BiLike /> {`(${likes})`}
        </button>

        <button
          className={`like_button ${unlikeButtonChecked ? "checked" : ""}`}
          data-type="unLike"
          title={props.t("Products.Likes")}
          onClick={likeHandler}
        >
          <BiDislike />
          {`(${unLikes})`}
        </button>
      </div>
    </div>
  );
};

export default withTranslation(ProductFooter);
