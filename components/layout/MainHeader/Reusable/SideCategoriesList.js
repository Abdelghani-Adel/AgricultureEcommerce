import React, { Component } from "react";
import Link from "next/Link";

class SideCategoriesList extends Component {
  render() {
    return (
      <div className="sidebar d-block">
        <div className="sidebar-widget widget-categories-icons">
          <h5 className="widget-title">Popular Categories</h5>
          <div className="row"></div>
        </div>
        <div className="sidebar-widget">
          <h5 className="widget-title">Popular Tags</h5>
          <div className="tagcloud">
            <Link href="#">Ingredients</Link>
            <Link href="#">Organic</Link>
            <Link href="#">Farms</Link>
            <Link href="#">Supplements</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SideCategoriesList;
