import { useEffect, useState } from "react";
import InfoDesc from "./InfoDesc";
import InfoTable from "./InfoTable";

const InfoData = (props) => {
  const [dataArray, setDataArray] = useState([]);
  const active = props.selected === true;

  useEffect(() => {
    props.data && setDataArray([...props.data]);
  }, []);

  return (
    <div
      className={`tab-pane fade show ${active ? "active" : ""}`}
      id={props.id}
      role="tabpanel"
      aria-labelledby="v-pills-home-tab"
    >
      {dataArray.length > 0 && props.type != "desc" && <InfoTable dataArray={dataArray} />}
      {dataArray.length > 0 && props.type == "desc" && <InfoDesc desc={props.data} />}
    </div>
  );
};

export default InfoData;
