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
            <div className="col-lg-3 col-xs-12" key={index}>
              <Link
                href={{
                  pathname: `/categories/${subCategory.FAClassificationSlug}`,
                  query: { id: `${subCategory.FAClassificationId}` },
                }}
              >
                <div className="card catg_card">
                  <img
                    className="card-img-top"
                    src={subCategory.FAClassificationImage}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{subCategory.FAClassificationName}</h5>
                    {/* <p className="card-text"> */}
                    <div
                      className="card-text"
                      dangerouslySetInnerHTML={{ __html: subCategory.FAClassificationDesc }}
                    />
                    {/* </p> */}
                    {/* <Link
                    href={`/categories/${subCategory.FAClassificationSlug}?id=${subCategory.FAClassificationId}`}
                    className="agri-btn-rounded primary"
                  >
                    {props.t("Products.ShopNow")}
                  </Link> */}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withTranslation(SubCategories);
