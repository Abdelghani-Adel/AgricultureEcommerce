import {withTranslation} from "react-multi-lang";


const Other = (props) => {
  return (
  
    <div className="col-lg-2 col-xs-12">
      <div className="andro_banner other_banner">
        <img src="../img/advertise.png" alt="agriculture_advertise" />

        <img src="../img/video.png" alt="agriculture_advertise" style={{ marginTop: "10px" }} />
        <img src="../img/advertise.png" alt="agriculture_advertise" style={{ marginTop: "10px" }} />
      </div>
    </div>
   
  );
};

export default withTranslation(Other);
