import React, { Component } from 'react';
import  Link  from 'next/Link';
import { withTranslation } from 'react-multi-lang';
// const navigationmenu = [{
//     id: 1,
//     linkText: 'Home',
//     child: false,
// },
// {
//     id: 2,
//     linkText: 'Blog',
//     child: true,
//     submenu: [
//         {
//             id: 21,
//             linkText: 'Blog Archive',
//             child: true,
//             submenu: [
//                 {
//                     id: 211,
//                     link: '/blog-grid',
//                     linkText: 'Grid View',
//                 },
//                 {
//                     id: 212,
//                     link: '/blog-list',
//                     linkText: 'List View',
//                 },
//                 {
//                     id: 213,
//                     link: '/blog-masonry',
//                     linkText: 'Masonary View',
//                 },
//             ]
//         },
//         {
//             id: 22,
//             link: '/post-single/1',
//             linkText: 'Blog Single'
//         },
//     ]
// },
// {
//     id: 3,
//     linkText: 'Pages',
//     child: true,
//     submenu: [
//         {
//             id: 31,
//             link: '/about',
//             linkText: 'About Us'
//         },
//         {
//             id: 32,
//             link: '/login',
//             linkText: 'Login'
//         },
//         {
//             id: 33,
//             link: '/register',
//             linkText: 'Sign Up'
//         },
//         {
//             id: 34,
//             link: '/checkout',
//             linkText: 'Checkout'
//         },
//         {
//             id: 35,
//             link: '/cart',
//             linkText: 'Cart'
//         },
//         {
//             id: 36,
//             link: '/wishlist',
//             linkText: 'Wishlist'
//         },
//         {
//             id: 37,
//             link: '/legal',
//             linkText: 'Legal'
//         },
//         {
//             id: 38,
//             link: '/error',
//             linkText: 'Error 404'
//         },
//     ]
// },
// ]
const navigationmenus = [
    {
    id: 1,
    linkText: 'Home',
    child: false,
    link: '/',
  },
    {
        id: 2,
        linkText: 'About',
        link: '/about',
    },
    {
        id: 3,
        linkText: 'Shop',
        link: '/categories',
    },
    {
        id: 4,
        linkText: 'ContactUs',
        link: '/contact',
    },
    {
        id: 5,
        linkText: 'Chat',
        link: '/chat',
    },
    
]

class Navigation extends Component {
    render() {
        return (
            <ul className="navbar-nav">
                {/* {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                    <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                        {item.child ? <Link onClick={e => e.preventDefault()} href="/"> {item.linkText} </Link> : <Link href={item.link}> {item.linkText} </Link>}
                        {item.child ?
                            <ul className="sub-menu" role="menu">
                                {item.submenu.map((sub_item, i) => (
                                    <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                        {sub_item.child ? <Link onClick={e => e.preventDefault()} href="/"> {sub_item.linkText} </Link> : <Link href={sub_item.link}> {sub_item.linkText} </Link>}
                                        {sub_item.submenu ?
                                            <ul className="sub-menu">
                                                {sub_item.submenu.map((third_item, i) => (
                                                    <li className="menu-item" key={i}><Link
                                                    href={third_item.link}>{third_item.linkText}</Link>
                                                    </li>
                                                ))}
                                            </ul> : null}
                                    </li>
                                ))}
                            </ul>
                            : null
                        }
                    </li>
                )) : null} */}
                {/* <li className="menu-item menu-item-has-children mega-menu-wrapper">
                    <Link href="#">Shop</Link>
                    <ul className="sub-menu">
                        <li>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="mega-menu-item">s
                                            <h6>Membership Delivery</h6>
                                            <p>
                                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                                                making it over 2000 years old.
                          </p>
                                            <Link href="/login" className="andro_btn-custom shadow-none btn-sm">Become a Member</Link>
                                        </div>
                                    </div>
                                    <div className="offset-lg-1 col-lg-3">
                                        <div className="mega-menu-item">
                                            <h6>Shop Pages</h6>
                                            <Link href="/shop-v1">Shop v1 (Default)</Link>
                                            <Link href="/shop-v2">Shop v2 (Full Width)</Link>
                                            <Link href="/shop-v3">Shop v3 (No Sidebar)</Link>
                                            <Link href="/shop-v4">Shop v4 (List view)</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mega-menu-item">
                                            <h6>Product Details Pages</h6>
                                            <Link href="/product-single/1">Product Details v1</Link>
                                            <Link href="/product-single-v2/1">Product Details v2</Link>
                                            <Link href="#" className="coming-soon">Product Details v3 <span>Coming Soon</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li> */}
                {navigationmenus.length > 0 ? navigationmenus.map((item, i) => (
                    <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                        {item.child ? <Link onClick={e => e.preventDefault()} href="/"> {this.props.t('Navbar.'+item.linkText)} </Link> : <Link href={item.link}> {this.props.t('Navbar.'+item.linkText)} </Link>}
                        {item.child ?
                            <ul className="sub-menu" role="menu">
                                {item.submenu.map((sub_item, i) => (
                                    <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                        {sub_item.child ? <Link onClick={e => e.preventDefault()} href="/"> {sub_item.linkText} </Link> : <Link href={sub_item.link}> {sub_item.linkText} </Link>}
                                        {sub_item.submenu ?
                                            <ul className="sub-menu">
                                                {sub_item.submenu.map((third_item, i) => (
                                                    <li className="menu-item" key={i}><Link
                                                    href={third_item.link}>{third_item.linkText}</Link>
                                                    </li>
                                                ))}
                                            </ul> : null}
                                    </li>
                                ))}
                            </ul>
                            : null
                        }
                    </li>
                )) : null}
            </ul>
        );
    }
}

export default withTranslation(Navigation);
