import { useEffect } from "react";
import { useState } from "react";
import { withTranslation } from "react-multi-lang";
import InfoData from "./InfoData";
import InfoTab from "./InfoTab";

const AdditionalInfo = (props) => {
  const { item } = props;
  const [firstTab, setFirstTab] = useState("");

  useEffect(() => {
    if (item.ingredients.length > 0) {
      setFirstTab("ingredients");
      return;
    } else if (item.facilities.length > 0) {
      setFirstTab("facilities");
      return;
    } else if (item.warns.length > 0) {
      setFirstTab("warns");
      return;
    } else if (item.reviews.length > 0) {
      setFirstTab("reviews");
      return;
    } else if (item.Item_Desc.length > 0) {
      setFirstTab("desc");
      return;
    }
  }, []);
  return (
    <div className="row mt-3">
      <div className="col-12">
        <ul className="nav nav-tabs d-flex flex-row-reverse" id="myTab" role="tablist">
          <InfoTab
            target={"ingredients"}
            data={item.ingredients}
            translation={"Products.Ingredients"}
            selected={firstTab == "ingredients"}
          />
          <InfoTab
            target={"facilities"}
            data={item.facilities}
            translation={"Products.Facilities"}
            selected={firstTab == "facilities"}
          />
          <InfoTab
            target={"warnings"}
            data={item.warns}
            translation={"Products.Warnings"}
            selected={firstTab == "warns"}
          />
          <InfoTab
            target={"reviews"}
            data={item.reviews}
            translation={"Products.reviews"}
            selected={firstTab == "reviews"}
          />
          <InfoTab
            target={"description"}
            data={item.Item_Desc}
            translation={"Products.Desc"}
            selected={firstTab == "desc"}
          />
        </ul>
      </div>
      <div className="col-12">
        <div className="tab-content">
          <InfoData
            data={item.ingredients}
            id={"ingredients"}
            selected={firstTab == "ingredients"}
          />
          <InfoData data={item.facilities} id={"facilities"} selected={firstTab == "facilities"} />
          <InfoData data={item.warns} id={"warnings"} selected={firstTab == "warns"} />
          <InfoData data={item.reviews} id={"reviews"} selected={firstTab == "reviews"} />
          <InfoData
            data={item.Item_Desc}
            id={"description"}
            selected={firstTab == "desc"}
            type="desc"
          />
        </div>
      </div>
    </div>
  );
};

export default withTranslation(AdditionalInfo);
