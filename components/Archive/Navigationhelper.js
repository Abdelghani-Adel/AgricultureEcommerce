import React, { Component, Fragment } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navmethod: false,
      categorymethod: false,
      sidebarmethod: true,
      isTop: true,
    };
  }
  // Sticky header
  // componentDidMount =() => {

  //     window.addEventListener('scroll', () => {
  //         this.setState({
  //             isTop: window.scrollY > 110
  //         });
  //     }, false);
  // }
  // Navigation
  toggleNav = () => {
    this.setState({
      navmethod: !this.state.navmethod,
    });
  };
  // Category
  categoryToggle = () => {
    this.setState({
      categorymethod: !this.state.categorymethod,
    });
  };
  // Sidebar
  sidebarToggle = () => {
    this.setState({
      sidebarmethod: !this.state.sidebarmethod,
    });
  };
  render() {
    return <Fragment />;
  }
}

export default HeaderComponent;
