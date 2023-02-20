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
import {
  setInitialLikeState,
  storeLikeInCookie,
  setInitLikes,
  sendLikeRecordToDB,
} from "../../../../../helper/cookiesHandlers";
import { useEffect } from "react";
import { UPSproductLikes } from "../../../../../services/productServices";

const ProductFooter = (props) => {
  const { product } = props;
  const session = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const [likeButtonChecked, setLikeButtonChecked] = useState(false);
  const [unlikeButtonChecked, setUnlikeButtonChecked] = useState(false);
  const [likes, setLikes] = useState();
  const [unLikes, setUnlikes] = useState();
  const [likeSentToDB, setLikeSentToDb] = useState(false);

  useEffect(() => {
    const prod_Id = product.Item_Id;
    const Review_Id = product.myreview ? product.myreview.Review_Id : 0;
    sendLikeRecordToDB(prod_Id, Review_Id, setLikeSentToDb);
  }, []);

  useEffect(() => {
    const dbLikes = product.isLike;
    const dbUnLikes = product.UnLike;
    const prod_Id = product.Item_Id;
    setInitLikes(dbLikes, dbUnLikes, prod_Id, setLikes, setUnlikes);
    setInitialLikeState(product, setLikeButtonChecked, setUnlikeButtonChecked);
  }, [likeSentToDB]);

  const likeHandler = async (e) => {
    let requestBody = {
      Review_Id: product.myreview ? product.myreview.Review_Id : 0,
      Company_Id: 0,
      Item_Id: product.Item_Id,
      Review_Num: 0,
      Review_Comment: "string",
      isLike: 0,
      Computer_Name: "string",
      Active: true,
      Cust_Name: "string",
    };

    const actionType = e.currentTarget.dataset.type;

    if (actionType == "like") {
      requestBody.isLike = 1;
      likeButtonChecked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
      setLikeButtonChecked((prev) => !prev);
      setUnlikeButtonChecked(false);
    } else if (actionType == "unLike") {
      requestBody.isLike = 2;
      unlikeButtonChecked ? setUnlikes((prev) => prev - 1) : setUnlikes((prev) => prev + 1);
      setUnlikeButtonChecked((prev) => !prev);
      setLikeButtonChecked(false);
    }

    if (session.status != "authenticated") {
      storeLikeInCookie(product.Item_Id, actionType);
      return;
    }

    UPSproductLikes(requestBody);
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
