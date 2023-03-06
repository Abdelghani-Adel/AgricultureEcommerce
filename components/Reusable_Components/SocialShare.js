import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import { FiShare2 } from "react-icons/fi";
import { useState } from "react";

const SocialShare = ({ url }) => {
  const [optionsShown, setOptionsShown] = useState(false);

  const toggleOptions = () => {
    setOptionsShown((prev) => !prev);
  };

  return (
    <div className="social_share">
      <div className="share_icon--wrapper" onClick={toggleOptions}>
        <FiShare2 className="share_icon" />
      </div>
      <div className={`social_share--options ${optionsShown ? "show" : ""}`}>
        <FacebookShareButton children={<FacebookIcon />} url={url} className="social_share--icon" />
        <TwitterShareButton children={<TwitterIcon />} url={url} className="social_share--icon" />
        <WhatsappShareButton children={<WhatsappIcon />} url={url} className="social_share--icon" />
      </div>
    </div>
  );
};

export default SocialShare;
