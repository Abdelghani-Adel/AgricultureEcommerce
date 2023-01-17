import React, { Component } from 'react';
import  Link  from 'next/Link';

class Category extends Component {
    render() {
        return (
            <ul>
                {/* Level 1 */}
                <li className="andro_category-mm-item andro_category-mm-item-has-children">
                    <Link href="#"> Food </Link>
                    <ul className="andro_category-mm-2-cols">
                        {/* Level 2 */}
                        <li>
                            <div className="andro_category-mm-banner">
                                <img src={"img/megamenu/1.jpg"} alt="megamenu img" />
                                <div className="andro_category-mm-banner-desc">
                                    <h6>Food</h6>
                                    <p>Experience organic food like never before</p>
                                </div>
                            </div>
                            <ul>
                                <li> <Link href="#">Vegetables &amp; Fruits</Link> </li>
                                <li> <Link href="#">Dairy</Link> </li>
                                <li> <Link href="#">Vegan Dairy</Link> </li>
                                <li> <Link href="#">Meats &amp; Fish</Link> </li>
                                <li> <Link href="#">Breads &amp; Cereal</Link> </li>
                                <li> <Link href="#">Honey</Link> </li>
                                <li> <Link href="#">Jam &amp; Spreads</Link> </li>
                                <li> <Link href="#">Legumes</Link> </li>
                                <li> <Link href="#">Oils</Link> </li>
                            </ul>
                            <ul>
                                <li> <Link href="#">Beans</Link> </li>
                                <li> <Link href="#">Vegan Food</Link> </li>
                                <li> <Link href="#">Distillates</Link> </li>
                                <li> <Link href="#">Eggs</Link> </li>
                                <li> <Link href="#">Snacks</Link> </li>
                                <li> <Link href="#">Syrups</Link> </li>
                                <li> <Link href="#">Pickles</Link> </li>
                                <li> <Link href="#">Wines &amp; Spirit</Link> </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="andro_category-mm-item"> <Link href="#"> Keto</Link> </li>
                <li className="andro_category-mm-item andro_category-mm-item-has-children">
                    <Link href="#"> Baskets </Link>
                    <ul className="andro_category-mm-2-cols">
                        {/* Level 2 */}
                        <li>
                            <div className="andro_category-mm-banner">
                                <img src={"../img/megamenu/2.jpg"} alt="megamenu img" />
                                <div className="andro_category-mm-banner-desc">
                                    <h6>Baskets</h6>
                                    <p>Hand made baskets for your organic goods</p>
                                </div>
                            </div>
                            <ul>
                                <li> <Link href="#">Vegetables &amp; Fruits</Link> </li>
                                <li> <Link href="#">Dairy</Link> </li>
                                <li> <Link href="#">Vegan Dairy</Link> </li>
                                <li> <Link href="#">Meats &amp; Fish</Link> </li>
                                <li> <Link href="#">Breads &amp; Cereal</Link> </li>
                            </ul>
                            <ul>
                                <li> <Link href="#">Honey</Link> </li>
                                <li> <Link href="#">Jam &amp; Spreads</Link> </li>
                                <li> <Link href="#">Legumes</Link> </li>
                                <li> <Link href="#">Oils</Link> </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="andro_category-mm-item"> <Link href="#"> Baby &amp; Kids Care</Link> </li>
                <li className="andro_category-mm-item"> <Link href="#"> Home Care</Link> </li>
                <li className="andro_category-mm-item"> <Link href="#"> Supplements</Link> </li>
                <li className="andro_category-mm-item"> <Link href="#"> Beauty Care</Link> </li>
                {/* <li className="andro_category-mm-item andro_category-mm-item-has-children andro_category-mm-item-expand">
                    <Link href="#"> <i className="fas fa-plus" /> More Categories</Link>
                    <ul className="andro_category-mm-2-cols">
                      
                        <li>
                            <div className="andro_category-mm-banner">
                                <img src={process.env.PUBLIC_URL + "/assets/img/megamenu/3.jpg"} alt="megamenu img" />
                                <div className="andro_category-mm-banner-desc">
                                    <h6>More Categories</h6>
                                    <p>Explore more categories that we offer</p>
                                </div>
                            </div>
                            <ul>
                                <li> <Link href="#">Vegetables &amp; Fruits</Link> </li>
                                <li> <Link href="#">Dairy</Link> </li>
                                <li> <Link href="#">Vegan Dairy</Link> </li>
                                <li> <Link href="#">Meats &amp; Fish</Link> </li>
                                <li> <Link href="#">Breads &amp; Cereal</Link> </li>
                            </ul>
                            <ul>
                                <li> <Link href="#">Honey</Link> </li>
                                <li> <Link href="#">Jam &amp; Spreads</Link> </li>
                                <li> <Link href="#">Legumes</Link> </li>
                                <li> <Link href="#">Oils</Link> </li>
                            </ul>
                        </li>
                    </ul>
                </li> */}
            </ul>
        );
    }
}

export default Category;