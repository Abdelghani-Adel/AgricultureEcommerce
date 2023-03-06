import Link from "next/Link";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";

const Breadcrumbs = (props) => {
  const pagename = props.breadcrumb.pagename;
  const lang = useSelector((state) => state.lang);
  return (
    <div className="breadcrumbs">
      <div className="container">
        <div className="breadcrumbs-inner">
          <h1 className="txt-white">{pagename}</h1>
          <p className="txt-white">
            <span>{pagename}</span>
            <span className="ms-2 me-2">/</span>
            <span>
              <Link href="/">{lang && props.t("Navbar.Home")}</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(Breadcrumbs);
