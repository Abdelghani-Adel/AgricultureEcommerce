import Link from "next/Link";
import {withTranslation} from "react-multi-lang";
const Breadcrumbs = (props) => {
  const pagename = props.breadcrumb.pagename;
  return (
    <div className="andro_subheader pattern-bg primary-bg">
      <div className="container">
        <div className="andro_subheader-inner">
          <h1>{pagename}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">{props.t("Navbar.Home")}</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {pagename}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default  withTranslation(Breadcrumbs);
