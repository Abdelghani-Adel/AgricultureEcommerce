import React, { Component } from "react";
import Link from "next/Link";

class Cta extends Component {
  render() {
    return (
      <div className="section" style={{ order: `${this.props.order}` }}>
        <div className="andro_cta-notice secondary-bg pattern-bg">
          <div className="andro_cta-notice-inner">
            <h3 className="text-white">Buy Today and Get 20% Off</h3>
            <p className="text-white">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed
              magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi.
            </p>
            <Link href="/" className="andro_btn-custom light">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Cta;
