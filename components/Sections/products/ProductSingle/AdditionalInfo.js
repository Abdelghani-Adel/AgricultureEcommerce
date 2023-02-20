import { withTranslation } from "react-multi-lang";
import InfoData from "./InfoTabs/InfoData";
import InfoTab from "./InfoTabs/InfoTab";

const AdditionalInfo = (props) => {
  const { item } = props;
  return (
    <div className="row">
      <div className="col-5 col-lg-4">
        <ul className="nav nav-pills d-flex flex-column" id="myTab" role="tablist">
          <InfoTab
            target={"ingreditents"}
            data={item.ingredients}
            translation={"Products.Ingredients"}
            selected={"true"}
          />
          <InfoTab
            target={"facilities"}
            data={item.facilities}
            translation={"Products.Facilities"}
          />
          <InfoTab target={"warnings"} data={item.warns} translation={"Products.Warnings"} />
          <InfoTab target={"reviews"} data={item.reviews} translation={"Products.reviews"} />
        </ul>
      </div>
      <div className="col-7 col-lg-8">
        <div className="tab-content">
          <InfoData data={item.ingredients} id={"ingreditents"} selected={"true"} />
          <InfoData data={item.facilities} id={"facilities"} />
          <InfoData data={item.warns} id={"warnings"} />
          <InfoData data={item.reviews} id={"reviews"} />
        </div>
      </div>
    </div>
  );
};

export default withTranslation(AdditionalInfo);
