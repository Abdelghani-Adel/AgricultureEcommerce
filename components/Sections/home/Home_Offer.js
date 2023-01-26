import React from 'react'
import { withTranslation } from 'react-multi-lang'

 function Home_Offer(props) {
    return (
        <div className="col-lg-2 col-xs-12">
      <div className="andro_banner offer_banner">
      <div className="offer_banner">
        <div className="card  mb-3">
          <div className="card-header">Special Offers</div>
          <div className="card-body text-success">
           <img src="../img/offer.jpeg" />
          </div>
          <div className="card-footer">{props.t("Products.ViewAll")}</div>
        </div>
      </div>
      </div>
    </div>
    )
}
export default withTranslation (Home_Offer)