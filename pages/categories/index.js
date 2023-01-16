import React, { Component } from 'react';
import Head from "next/head";
import Breadcrumbs from "../../components/Breadcrumbs";
import {withTranslation} from "react-multi-lang";
import Categories from "../../data/category.json";
import Link from "next/Link";
const pagelocation = "Categories"
 class Index extends Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     pagelocation: this.props.t("Navbar.Categories")
        // }
    }

    render() {
        const { CategoryList } = this.props;
        return (
            <>
                <Head>
                    <title></title>
                    <meta
                        name="description"
                        content="#"
                    />
                </Head>
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <div className="section">
                <div className="container">
                <div className="row">
                    {CategoryList && CategoryList.length > 0 ?
                        CategoryList.map((cat, index) => {
                            return (
                                <div className="col-lg-4 col-xs-12" key={index}>
                                   <div className="card catg_card">
                                    <img className="card-img-top" src="../img/products/7.png" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{cat.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link href={"categories/"+cat.slug} className="agri-btn-rounded primary">{this.props.t("Products.ShopNow")}</Link>
                                    </div>
                                    </div>


                                </div>

                            )
                        })
                        : null}
                </div>
                </div>
                </div>
              


            </>
        )
    }
}

export const getStaticProps = async () => {
    return {
        props: {
            CategoryList: Categories,

        }, // will be passed to the page component as props
    }
}

export default withTranslation(Index);