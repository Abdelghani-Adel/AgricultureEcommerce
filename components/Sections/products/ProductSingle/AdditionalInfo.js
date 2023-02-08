import { withTranslation } from "react-multi-lang";

const AdditionalInfo = (props) => {
  const { item } = props;
  return (
    <div className="row">
      <div className="col-lg-4">
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
            {/* {props.t("Products.ItemDesc")} */}
            Ingredients
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
            {/* {props.t("Products.AddInfo")} */}
            Facilities
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
            {/* {props.t("Products.reviews")} */}
            Warnings
          </li>
        </ul>
      </div>
      <div className="col-lg-8">
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            No Ingredients Found
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            No Facilities Found
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            No Warnings Found
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(AdditionalInfo);
