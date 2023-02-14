import Link from "next/Link";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";

import { withTranslation } from "react-multi-lang";
import AddToCart from "../../AddToCart";
import { useState } from "react";
import { getAuthHeaders } from "../../../../../helper/auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const ProductFooter = (props) => {
  const { product } = props;
  const session = useSession();
  const router = useRouter();
  const [likeButtonChecked, setLikeButtonChecked] = useState(false);
  const [unlikeButtonChecked, setUnlikeButtonChecked] = useState(false);

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

    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_SERVER}/api/Booking/UPSProducts_Reviews_Like`,
    //   {
    //     method: "POST",
    //     headers: await getAuthHeaders(),
    //     body: JSON.stringify(requestBody),
    //   }
    // );

    // const data = await res.json();

    console.log(requestBody);
    // console.log(data);
  };

  return (
    <div className="product_card--footer">
      <div className="product_card--buttons">
        <AddToCart item={product} style={"andro_btn-custom light"} />

        <Link
          href={props.productPath}
          data-toggle="tooltip"
          data-placement="top"
          className="andro_btn-custom light"
          title={props.t("Products.ViewDetails")}
        >
          <FaRegEye />
        </Link>

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
