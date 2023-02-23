import Link from "next/Link";
import { FaUserAlt } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";

const LoginController = () => {
  return (
    <div>
      <span>
        {/* <FaUserAlt /> */}
        تسجيل الدخول
      </span>
      <ul className="sub-menu sub-menu-left login_container">
        <button className="auth_btn">
          <Link href="/login">
            <FiLogIn />
            <span className="ms-2">تسجيل الدخول</span>
          </Link>
        </button>
        <p className="text-center">
          New Customer? <Link href="/login">Start here</Link>
        </p>
        <hr className="m-0" />
      </ul>
    </div>
  );
};

export default LoginController;
