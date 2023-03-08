import { useDispatch } from "react-redux";
import Breadcrumbs from "../../../components/Reusable_Components/Breadcrumbs";
import ProductCardList from "../../../components/Sections/products/ProductCardList/ProductCardList";
import { decrypt } from "../../../helper/crypto";
import { loaderActions } from "../../../redux/slices/loaderSlice";
import { getSearchItem } from "../../../services/Filter";

const FilterResult = (props) => {
  const products = props.products.data;
  const dispatch = useDispatch();

  dispatch(loaderActions.hideLoader());

  return (
    <>
      <Breadcrumbs breadcrumb={{ pagename: "" }} />
      <div className="section pt-4">
        <div className="container">
          <div className="row">
            <ProductCardList products={products ? products : []} />
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const flag = context.query.flag;

  const decryptedID = decrypt(`${id}`);
  const decryptedFlag = decrypt(`${flag}`);

  const lang = context.req.cookies.langCookie ? context.req.cookies.langCookie : "ar";

  const textString = context.query.textString;
  const products = await getSearchItem(decryptedID, decryptedFlag, textString, lang);

  return {
    props: {
      products: products,
    },
  };
};

export default FilterResult;
