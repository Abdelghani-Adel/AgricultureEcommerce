import { useRouter } from "next/router";
import Breadcrumbs from "../../../components/layout/Reusable/Breadcrumbs";
import { withTranslation } from "react-multi-lang";
import Link from "next/Link";

const categories = [
  {
    FAClassificationId: 82,
    FACompany_Id: 1,
    FAEntityID: 81,
    FAClassification_ParentId: 81,
    FAClassificationCode: "CAT0000082",
    RefLocal: null,
    FAClassificationName: "1 مبيدات",
    FAClassificationPath: "//CATE0000000",
    FAClassificationPathName: "//Categories",
    IsItemOnly: false,
    Cate_Id: null,
    Cost_Meth_Id: null,
    WH_Id: null,
    Wh_Loc_Id: null,
    FAClassificationHTML: "",
    FAClassificationSlug: "mopidat",
    LastModified: null,
    EntryDate: null,
    ComputerNameOrIP: null,
    User_Id: 1,
    Active: null,
    ClassificationChildren: [],
    leaf: false,
    FAClassificationImage:
      "http://192.168.10.251:800\\wwwroot\\uploads\\thumbnail_6094_ebc1996f-a20a-4064-8d01-680467c7b75c.jpg",
  },
  {
    FAClassificationId: 82,
    FACompany_Id: 1,
    FAEntityID: 81,
    FAClassification_ParentId: 81,
    FAClassificationCode: "CAT0000082",
    RefLocal: null,
    FAClassificationName: "2 مبيدات",
    FAClassificationPath: "//CATE0000000",
    FAClassificationPathName: "//Categories",
    IsItemOnly: false,
    Cate_Id: null,
    Cost_Meth_Id: null,
    WH_Id: null,
    Wh_Loc_Id: null,
    FAClassificationHTML: "",
    FAClassificationSlug: "mopidat2",
    LastModified: null,
    EntryDate: null,
    ComputerNameOrIP: null,
    User_Id: 1,
    Active: null,
    ClassificationChildren: [],
    leaf: false,
    FAClassificationImage:
      "http://192.168.10.251:800\\wwwroot\\uploads\\thumbnail_6094_ebc1996f-a20a-4064-8d01-680467c7b75c.jpg",
  },
];

const CategorySingle = (props) => {
  const { categories, categorySlug } = props;
  const router = useRouter();
  return (
    <>
      <Breadcrumbs breadcrumb={{ pagename: router.query.categorySlug }} />
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
                      href={categorySlug + "/" + subCategory.FAClassificationSlug}
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
    </>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch("http://192.168.10.251:800/api/ECommerceSetting/GetCategoriesMenu", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lang: "en",
      FAClassification_ParentId: 81,
    }),
  });
  const data = await response.json();

  const paths = categories.map((category) => {
    return {
      params: { categorySlug: `${category.FAClassificationSlug}` },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const response = await fetch("http://192.168.10.251:800/api/ECommerceSetting/GetCategoriesMenu", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lang: "en",
      FAClassification_ParentId: 81,
    }),
  });
  const data = await response.json();

  return {
    props: {
      categories: categories.filter(
        (cat) => cat.FAClassificationSlug == context.params.categorySlug
      ),
      categorySlug: context.params.categorySlug,
    },
  };
};

export default withTranslation(CategorySingle);
