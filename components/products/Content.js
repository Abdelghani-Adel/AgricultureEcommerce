import React, { Component, Fragment } from 'react';
import  Link  from 'next/Link';
// import Relatedproduct from '../../layouts/Relatedproduct';
// import blogcategory from '../../../data/blogcategory.json';
// import blogtags from '../../../data/blogtags.json';
import { Rating } from '../../helper/helper';
import ProductCarousel from "./productCarousel";
import {FaRegHeart ,FaPlus ,FaMinus ,FaCompressAlt} from "react-icons/fa";
import { withTranslation } from 'react-multi-lang';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import { OverlayTrigger, Tooltip, Tab, Nav } from "react-bootstrap";

// const wishlisttip = (
//     <Tooltip>
//         Add To Wishlist
//     </Tooltip>
// );
// const facebooktip = (
//     <Tooltip>
//         Share on Facebook
//     </Tooltip>
// );
// const twittertip = (
//     <Tooltip>
//         Share on Twitter
//     </Tooltip>
// );
// const linkedintip = (
//     <Tooltip>
//         Share on Linkedin
//     </Tooltip>
// );

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 1,
            item:{}
        };
    }
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    };

    DecreaseItem = () => {
        if (this.state.clicks < 1) {
            this.setState({
                clicks: 0,
            });
        } else {
            this.setState({
                clicks: this.state.clicks - 1,
            });
        }
    };
    handleChange(event) {
        this.setState({ clicks: event.target.value });
    }
    componentDidMount=()=>{
        const {ItemDetails} =this.props;
        if(ItemDetails !=null){
            this.setState({
                item:ItemDetails
            })
        }
    }
    render() {
        const {item} =this.state;
        console.log("ItemDetailssssssssssssssssssssssss ",item);
        return (
            <Fragment>
                {item  ?
                    <>
                        {/* Product Content Start */}
                        <div className="section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="andro_product-single-thumb">
                                            <ProductCarousel/>
                                            {/* <img src={"../" + ItemDetails.img} alt={ItemDetails.title} /> */}
                                        </div>
                                        {/* Pagination Start */}
                                        {/* <div className="andro_single-pagination">
                                            <div className="andro_single-pagination-item andro_single-pagination-prev">
                                                <Link href="/product-single/1">
                                                    <div className="andro_single-pagination-thumb">
                                                        <img src={"../img/products/9.png"} alt="product" />
                                                    </div>
                                                    <div className="andro_single-pagination-content">
                                                        <h6>Tomatoes</h6>
                                                    </div>
                                                    <i className="fas fa-chevron-left" />
                                                </Link>
                                            </div>
                                            <div className="andro_single-pagination-item andro_single-pagination-next">
                                                <Link href="/product-single/2">
                                                    <div className="andro_single-pagination-thumb">
                                                        <img src={"../img/products/15.png"} alt="product" />
                                                    </div>
                                                    <div className="andro_single-pagination-content">
                                                        <h6>Apricots</h6>
                                                    </div>
                                                    <i className="fas fa-chevron-right" />
                                                </Link>
                                            </div>
                                        </div> */}
                                        {/* Pagination End */}
                                    </div>
                                    <div className="col-md-7">
                                        <div className="andro_product-single-content">
                                            <div className="andro_product-single-controls andro_post-share">
                                               
                                                    <Link href="#" className="andro_add-to-favorite"> <FaRegHeart/> </Link>
                                                    <Link href="#" className="andro_add-to-favorite"> <FaCompressAlt/> </Link>
                                              
                                            </div>
                                            <div className="andro_rating-wrapper">
                                                <div className="andro_rating">
                                                    {Rating(item.rating)}
                                                </div>
                                                <span>{item.rating} Stars</span>
                                            </div>
                                            <h3> {item.title} </h3>
                                            <div className="andro_product-price">
                                                <span>{item.price} $</span>
                                            </div>
                                            <p className="andro_product-excerpt">{item.shortdesc}</p>
                                            <form className="andro_product-atc-form">
                                                
                                                <div className="qty-outter">
                                                    <Link href={"/product-single/" + item.id} className="andro_btn-custom">Buy Now</Link>
                                                    <div className="qty">
                                                        <span className="qty-subtract" onClick={this.DecreaseItem} data-type="minus" data-field><FaMinus/></span>
                                                        <input type="text" name="clicks" value={this.state.clicks} onChange={this.handleChange.bind(this)} />
                                                        <span className="qty-add" onClick={this.IncrementItem} data-type="plus" data-field><FaPlus /></span>
                                                    </div>
                                                </div>
                                            </form>
                                            <ul className="andro_product-meta">
                                                <li>
                                                    <span>{this.props.t("Products.Brand")}: </span>
                                                    <div className="andro_product-meta-item">
                                                        {/* {ItemDetails.categories.map((category) => (
                                                            blogcategory.filter(item => {
                                                                return item.id === category
                                                            }).map((cat, i) => (
                                                                <Link key={i} href="#">{cat.title},</Link>
                                                            ))
                                                        ))} */}
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>{this.props.t("Products.UOM")}: </span>
                                                    <div className="andro_product-meta-item">
                                                        {/* {ItemDetails.tags.map((tag) => (
                                                            blogtags.filter(item => {
                                                                return item.id === tag
                                                            }).map((tags, i) => (
                                                                <Link key={i} href="#">{tags.title},</Link>
                                                            ))
                                                        ))} */}
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>SKU: </span>
                                                    <div className="andro_product-meta-item">
                                                        <span>{item.sku}</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="section pt-0">
                            <div className="container">
                                <div className="andro_product-additional-info">
                                
                                       
                                    <div className="row">
                                        <div className="col-lg-4">
                                        <ul className="nav nav-tabs andro_sticky-section" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">{this.props.t("Products.ItemDesc")}</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="add-info-tab" data-toggle="tab" href="#add-info" role="tab" aria-controls="add-info" aria-selected="false">{this.props.t("Products.AddInfo")}</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">{this.props.t("Products.reviews")}</a>
                                            </li>
                                            
                                            </ul>
                                        </div>
                                        <div className="col-lg-8">
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="description" role="tabpanel" aria-labelledby="description-tab">
                                              
                                                        <div dangerouslySetInnerHTML={{ __html: item.longdescription }} />
                                            </div>
                                            <div className="tab-pane" id="add-info" role="tabpanel" aria-labelledby="add-info-tab">infoooooooo</div>
                                            <div className="tab-pane" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">reviewwwwwwwwww</div>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </>
                : null}
                {/* <Relatedproduct /> */}
            </Fragment>
        );
    }
}

export default withTranslation(Content);