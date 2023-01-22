import React, { useState } from 'react'
import { withTranslation } from 'react-multi-lang';
import classNames from "classnames";
import SideCategoriesList from "../MainHeader/Reusable/SideCategoriesList";
import Category from "./Category";

function CategoriesNav() {
    const [sidebarmethod, setsidebarmethod] = useState(false);

    return (
        <>
            <aside
                className={classNames("andro_aside andro_aside-right", {
                    open: sidebarmethod,
                })}
            >
                <SideCategoriesList />
            </aside>
            <div className="andro_header-bottom">
                {/* <div className="container"> */}
                <div className="andro_header-bottom-inner">
                    <ul className="navbar-nav">
                        <li><div
                        className="aside-toggler aside-trigger-right desktop-toggler"
                        onClick={() => setsidebarmethod(!sidebarmethod)}
                    >
                        <span />
                        <span />
                        <span />
                    </div></li>
                        <Category />
                    </ul>
                    

                </div>
                {/* </div> */}

            </div>
        </>
    )
}

export default withTranslation(CategoriesNav)