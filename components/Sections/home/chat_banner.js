import React from "react";
import { withTranslation } from "react-multi-lang";

function chat_banner(props) {
  return (
    <div className="col-6 col-lg-2">
      <div className="chat_banner">
        <div className="card  mb-3">
          <div className="card-header">Room Title</div>
          <div className="card-body text-success">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the cards
              content.
            </p>
          </div>
          <div className="card-footer">{props.t("Home.JoinChat")}</div>
        </div>
      </div>
    </div>
  );
}

export default withTranslation(chat_banner);
