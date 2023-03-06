import React, { Component } from "react";
import Link from "next/Link";
import { useSelector } from "react-redux";
import { withTranslation } from "react-multi-lang";

const Cta = (props) => {
  const lang = useSelector((state) => state.lang);

  return (
    <div className="section" style={{ order: `${props.order}` }}>
      <div className="cta">
        <div className="cta_inner">
          <h3 className="text-white">Buy Today and Get 20% Off</h3>
          <p className="text-white">
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed
            magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi.
          </p>
          <Link href="/" className="default_btn mt-3">
            {lang && props.t("Home.ShopNow")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(Cta);
