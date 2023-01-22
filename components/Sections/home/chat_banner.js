import React from 'react'
import { withTranslation } from 'react-multi-lang'

function chat_banner(props) {
    return (
        <div className="chat_banner">
            <div className="section-title flex-title">
            <h4 className="title">{props.t("Navbar.Chat")}</h4>
            </div>
            <div class="card  mb-3">
  <div class="card-header">Room Title</div>
  <div class="card-body text-success">
   
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-footer">{props.t("Home.JoinChat")}</div>
</div>
             {/* <div className="content">
                 <div className="banner_header">
                     Room Title

                 </div>
           
             </div> */}
           
            
        </div>
    )
}

export default  withTranslation (chat_banner)