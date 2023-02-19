import { withTranslation } from "react-multi-lang";

const AdditionalInfo = (props) => {
  const { item } = props;
  return (
    <div className="row">
      <div className="col-5 col-lg-4">
        <ul className="nav nav-pills d-flex flex-column" id="myTab" role="tablist">
          <li
            className="nav-link active mb-2"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            {props.t("Products.Ingredients")}
          </li>
          <li
            className="nav-link mb-2"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            {props.t("Products.Facilities")}
          </li>
          <li
            className="nav-link mb-2"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            {props.t("Products.Warnings")}
          </li>
          <li
            className="nav-link mb-2"
            id="v-pills-review-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-review"
            type="button"
            role="tab"
            aria-controls="v-pills-review"
            aria-selected="false"
          >
            {props.t("Products.reviews")}
          </li>
        </ul>
      </div>
      <div className="col-7 col-lg-8">
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            {item.ingredients.length > 0 ? (
              <div dangerouslySetInnerHTML={{ __html: item.ingredients[0].desc }}></div>
            ) : (
              "No ingredients found"
            )}
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            {item.facilities.length > 0 ? (
              <div dangerouslySetInnerHTML={{ __html: item.facilities[0].desc }}></div>
            ) : (
              "No facilities found"
            )}
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            {item.warns.length > 0 ? (
              <div dangerouslySetInnerHTML={{ __html: item.warns[0].desc }}></div>
            ) : (
              "No warnings found"
            )}
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-review"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            {item.reviews && item.reviews.length > 0 ? (
              <div dangerouslySetInnerHTML={{ __html: item.reviews[0].desc }}></div>
            ) : (
              "No reviews found"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(AdditionalInfo);
