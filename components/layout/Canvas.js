import React, { Component } from "react";
import Link from "next/Link";

class Canvas extends Component {
  render() {
    return (
      <div className="sidebar d-block">
        {/* Popular Categories Start */}
        <div className="sidebar-widget widget-categories-icons">
          <h5 className="widget-title">Popular Categories</h5>
          <div className="row"></div>
        </div>
        {/* Popular Categories End */}
        {/* Popular Tags Start */}
        <div className="sidebar-widget">
          <h5 className="widget-title">Popular Tags</h5>
          <div className="tagcloud">
            {/* <Link href="#">Health</Link> */}
            {/* <Link href="#">Food</Link> */}
            <Link href="#">Ingredients</Link>
            <Link href="#">Organic</Link>
            <Link href="#">Farms</Link>
            {/* <Link href="#">Green</Link> */}
            {/* <Link href="#">Fiber</Link> */}
            <Link href="#">Supplements</Link>
            {/* <Link href="#">Gain</Link> */}
            {/* <Link href="#">Live Stock</Link> */}
            {/* <Link href="#">Harvest</Link> */}
          </div>
        </div>
        {/* Popular Tags End */}
      </div>
    );
  }
}

export default Canvas;
