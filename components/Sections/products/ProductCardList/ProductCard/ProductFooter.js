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
import { getCookie, storeLikeInCookie } from "../../../../../helper/cookiesHandlers";
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

  useEffect(() => {
    let likes = product.isLike;
    let unLikes = product.UnLike;

    const likesCookieIsFound = getCookie("likesCookie");
    if (likesCookieIsFound) {
      const parsedCookie = JSON.parse(likesCookieIsFound);
      const productIndex = parsedCookie.products.findIndex((item) => item.id == product.Item_Id);
      const foundProduct = parsedCookie.products[productIndex];
      if (foundProduct && foundProduct.liked) {
        likes = likes + 1;
        setLikeButtonChecked(true);
      }
      if (foundProduct && foundProduct.unLiked) {
        unLikes = unLikes + 1;
        setUnlikeButtonChecked(true);
      }
    }

    setLikes(likes);
    setUnlikes(unLikes);
  }, []);

  const likeHandler = async (e) => {
    let requestBody = {
      Review_Id: 0,
      Company_Id: 0,
      Item_Id: product.Item_Id,
      Review_Num: 0,
      Review_Comment: "string",
      isLike: 0,
      Computer_Name: "string",
      Active: true,
      Cust_Name: "string",
    };

    const actionType = e.target.dataset.type;

    if (actionType == "like") {
      if (likeButtonChecked) {
        requestBody = { ...requestBody, isLike: 0 };
        setLikes((prev) => {
          return prev - 1;
        });
      } else {
        requestBody = { ...requestBody, isLike: 1 };
        setLikes((prev) => {
          return prev + 1;
        });
      }

      setLikeButtonChecked((prev) => {
        return !prev;
      });
    }

    if (actionType == "unLike") {
      if (unlikeButtonChecked) {
        requestBody = { ...requestBody, isLike: 0 };
        setUnlikes((prev) => {
          return prev - 1;
        });
      } else {
        requestBody = { ...requestBody, isLike: 2 };
        setUnlikes((prev) => {
          return prev + 1;
        });
      }
      setUnlikeButtonChecked((prev) => {
        return !prev;
      });
    }

    if (session.status != "authenticated") {
      storeLikeInCookie(product.Item_Id, actionType);
      return;
    }

    // UPSproductLikes(requestBody);
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
          <BiDislike /> {`(${unLikes})`}
        </button>
      </div>
    </div>
  );
};

export default withTranslation(ProductFooter);
