import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCookie } from "../../helper/cookiesHandlers";
import { editCart, getCartDetails } from "../../redux/slices/cartSlice";
import { loaderActions } from "../../redux/slices/loaderSlice";
import { getNavbarLinks } from "../../redux/slices/navbarSlice";
import Footer from "./Footer/Footer";
import MainHeader from "./MainHeader/MainHeader";
import Loader from "./Reusable/Loader";

export default function MainLayout(props) {
  const dispatch = useDispatch();
  const loaderState = useSelector((state) => state.loader);
  const router = useRouter();
  const session = useSession();

  const changeLang = (lang) => {
    props.changeLang(lang);
  };

  useEffect(() => {
    dispatch(loaderActions.showLoader());
    const cartDetails = dispatch(getCartDetails());
    const navbarLinks = dispatch(getNavbarLinks());

    const addCartItemsFromCookies = async () => {
      const cartCookie = getCookie("cartCookie");
      const session = await getSession();
      console.log(session);

      if (cartCookie && session) {
        router.push("/cart");
        const cartFoundInTheCookie = JSON.parse(cartCookie);
        const itemsFoundInTheCookie = cartFoundInTheCookie.items;

        // Loop through the items and call the api on each one of them
        for (let item of itemsFoundInTheCookie) {
          const payload = {
            action: "plus",
            item: item,
          };
          await dispatch(editCart(payload));
        }

        // delete the cookie
        document.cookie = `cartCookie=${cartCookie}; expires=Thu, 18 Dec 2013 12:00:00 UTC`;
      }
    };

    const cartDetailsFromCookies = addCartItemsFromCookies();

    Promise.all([cartDetails, navbarLinks, cartDetailsFromCookies]).then(() => {
      console.log("dispatch hide");
      dispatch(loaderActions.hideLoader());
    });

    console.log("use effect run");
  }, []);

  return (
    <>
      <MainHeader changeLang={changeLang} lang={props.lang} />
      <div style={{ width: "60px", height: "60px", position: "absolute" }}>
        <ToastContainer
          position="top-center"
          autoClose={500}
          hideProgressBar={true}
          theme="light"
        />
      </div>
      {loaderState && <Loader />}
      {props.children}
      <Footer footer={{ style: "", logo: "img/logo.png" }} />
    </>
  );
}
