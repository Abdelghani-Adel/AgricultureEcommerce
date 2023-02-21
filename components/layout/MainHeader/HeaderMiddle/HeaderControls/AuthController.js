import { signOut, useSession } from "next-auth/react";
import Link from "next/Link";
import { FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { loaderActions } from "../../../../../redux/slices/loaderSlice";

const AuthController = (props) => {
  const dispatch = useDispatch();
  const session = useSession();

  const logoutHandler = () => {
    dispatch(loaderActions.showLoader());
    signOut();
    dispatch(loaderActions.hideLoader());
  };

  return (
    <li className="menu-item menu-item-has-children ps-1 pe-1">
      {props.mobileView === true && (
        <>
          {session.status == "authenticated" ? (
            <>
              <li onClick={logoutHandler} className="justify-content-start align-items-center">
                <Link href="#" className="ms-2">
                  <FiLogOut />
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="justify-content-start align-items-center">
                <Link href="/login" className="ms-2 login_link">
                  <FiLogOut />
                  Login
                </Link>
              </li>
            </>
          )}
        </>
      )}
      {props.mobileView === false && (
        <>
          {session.status == "authenticated" ? (
            <>
              <Link href="">{session.data.user.username}</Link>
              <ul className="sub-menu sub-menu-left">
                <span className="ms-2 text-muted">{session.data && session.data.user.email}</span>
                <li onClick={logoutHandler} className="justify-content-start align-items-center">
                  <FiLogOut />
                  <span className="ms-2">Logout</span>
                </li>
              </ul>
            </>
          ) : (
            <>
              <span title="Login">
                <FaUserAlt />
              </span>
              <ul className="sub-menu sub-menu-left">
                <li className="justify-content-start align-items-center">
                  <Link href="/login" className="ms-2 login_link">
                    <FiLogOut />
                    Login
                  </Link>
                </li>
              </ul>
            </>
          )}
        </>
      )}
    </li>
  );
};

export default AuthController;
