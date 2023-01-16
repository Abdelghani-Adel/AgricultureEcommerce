import React, { Component, Fragment } from 'react';
// import Featuredpost from './Featuredpost';
const Banner = React.lazy(() => import("./Banner"));
const BestProducts = React.lazy(() => import("./BestProducts/BestProducts"));
const Cta = React.lazy(() => import("./Cta"));
const AgricultureOthers =React.lazy(()=> import("./AgricultureOthers"));

class Content extends Component {
    render() {
        return (
            <>
                 <Banner/>
                 <BestProducts ProductList={this.props.ProductList}/>
                 
                 <div className="section pt-0">
                     <Cta/>
              </div>
              <div className="section pt-0 andro_fresh-arrivals">
                <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-xs-12">

                       <AgricultureOthers BooksInfoList={this.props.BooksInfoList}/>
                  </div>
                  <div className="col-lg-4 col-md-4 col-xs-12">
                      <div style={{width:"100%"}}>
                        
                      <img src="img/videoFull.png" alt="agriculture_video" className="img-fluid h-100"/>
                      </div>
                     
                  </div>

              </div>
                    </div>
                    </div>
             
            </>
        );
    }
}

export default Content;