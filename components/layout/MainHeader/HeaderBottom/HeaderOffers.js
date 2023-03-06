import Link from "next/Link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";

const Offers = [
  { title: "Cash On Delivery", icon: "icon.png" },
  { title: "Free Shipping", icon: "icon.png" },
  { title: "Free Refund", icon: "icon.png" },
];
function HeaderOffers(props) {
  const [data, setData] = useState();
  const lang = useSelector((state) => state.lang);

  useEffect(() => {
    async function fetchData() {
      const data = Offers;
      setData(data);
    }
    fetchData();
  }, []);
  return (
    <>
      <Link href="/about">{lang && props.t("Navbar.About")}</Link>
      <Link href="#">{lang && props.t("Navbar.Partners")}</Link>
      <Link href="/contact">{lang && props.t("Navbar.ContactUs")}</Link>
      {/* {data &&
        data.map((offer, index) => {
          return (
            <Link key={index} href="#">
              <Image src={`/img/` + offer.icon} alt="ecommerce" width="16" height="16" />
              {offer.title}
            </Link>
          );
        })} */}
    </>
  );
}

export default withTranslation(HeaderOffers);
