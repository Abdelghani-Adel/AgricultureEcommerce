import { signOut, useSession } from "next-auth/react";
import Link from "next/Link";
import { FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { loaderActions } from "../../../../../../redux/slices/loaderSlice";
import LoginController from "./LoginController";
import ProfileController from "./ProfileController";

const ProfileAuthController = (props) => {
  const dispatch = useDispatch();
  const session = useSession();

  const logoutHandler = () => {
    dispatch(loaderActions.showLoader());
    signOut();
    dispatch(loaderActions.hideLoader());
  };

  return (
    <ul>
      <li className="profile_controller menu-item menu-item-has-children ps-1 pe-1">
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
          <>{session.status == "authenticated" ? <ProfileController /> : <LoginController />} </>
        )}
      </li>
      <div className="overlay"></div>
    </ul>
  );
};

export default ProfileAuthController;
