import React from 'react';
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/Footer";
export default function layout(props) {
    console.log("this.props  " ,props);
    const changeLang =(lang)=>{
        props.changeLang(lang);
    }
    return (
        <>
        <Navbar changeLang={changeLang} lang={props.lang}/>
        {props.children}
            <Footer footer={{ style:"", logo:"img/logo.png" }}/>
        </>
    )
}
