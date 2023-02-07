import Link from "next/Link";
import { withTranslation } from "react-multi-lang";

const SubCategories = (props) => {
  const { categories } = props;
  console.log(categories);
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          {categories.map((subCategory, index) => (
            <div className="col-lg-4 col-xs-12" key={index}>
              <div className="card catg_card">
                <img
                  className="card-img-top"
                  src={`../assets/img/products/${index + 1}.png`}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{subCategory.FAClassificationName}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                  <Link
                    href={`categories/?id=${subCategory.FAClassificationId}`}
                    className="agri-btn-rounded primary"
                  >
                    {props.t("Products.ShopNow")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withTranslation(SubCategories);
