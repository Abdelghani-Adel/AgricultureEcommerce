import Link from "next/Link";
import { FiLogIn } from "react-icons/fi";
import { useSelector } from "react-redux";
import { withTranslation } from "react-multi-lang";

const LoginController = (props) => {
  const lang = useSelector((state) => state.lang);
  return (
    <div>
      <span>{lang && props.t("Auth.Login")}</span>
      <ul className="sub-menu sub-menu-left login_container">
        <li className="d-flex justify-content-between">
          <button className="auth_btn" aria-label="Login">
            <Link href="/login">
              <FiLogIn />
              <span className="ms-2">{lang && props.t("Auth.Login")}</span>
            </Link>
          </button>
          <button className="auth_btn  ms-2" aria-label="Login">
            <Link href="/vendor-registration">
              <span className="ms-2">{lang && props.t("Auth.ProviderSignup")}</span>
            </Link>
          </button>
        </li>
        <p className="text-center">
          New Customer? <Link href="/login">Start here</Link>
        </p>
        <hr className="m-0" />
      </ul>
    </div>
  );
};

export default withTranslation(LoginController);
