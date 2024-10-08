import React from "react";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";

function ChatBanner(props) {
  const lang = useSelector((state) => state.lang);
  return (
    <div className="col-12 col-lg-2">
      <div className="chat_banner">
        <div className="card mb-3">
          <div className="card-header">{lang && props.t("Home.RoomTitle")}</div>
          <div className="card-body text-success">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the cards
              content.
            </p>
          </div>
          <div className="card-footer">{lang && props.t("Home.JoinChat")}</div>
        </div>
      </div>
    </div>
  );
}

export default withTranslation(ChatBanner);
