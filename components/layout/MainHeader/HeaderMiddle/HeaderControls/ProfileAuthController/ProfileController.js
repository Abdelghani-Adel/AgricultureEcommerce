import { signOut, useSession } from "next-auth/react";
import Link from "next/Link";
import { FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { loaderActions } from "../../../../../../redux/slices/loaderSlice";

const ProfileController = () => {
  const dispatch = useDispatch();
  const session = useSession();

  const logoutHandler = () => {
    dispatch(loaderActions.showLoader());
    signOut();
    dispatch(loaderActions.hideLoader());
  };
  return (
    <>
      <span>{session.data.user.username}</span>
      <ul className="sub-menu sub-menu-left drop_down login_container">
        {/* <span className="user_email">{session.data && session.data.user.email}</span> */}
        <button onClick={logoutHandler} className="auth_btn">
          <FiLogOut />
          <span className="ms-2">تسجيل الخروج</span>
        </button>
        <hr className="m-0 mt-2 mb-2" />

        <div className="d-flex justify-content-between">
          <div className="w-100 p-2">
            <h6 className="text-center mb-0">Your Lists</h6>
            <ul>
              <li>Agri Books</li>

              <li>
                <Link href="#">Create New List ?</Link>
              </li>
            </ul>
          </div>
          <div className="w-100 p-2" style={{ borderLeft: "1px solid #b3b0b0" }}>
            <h6 className="text-center mb-0">Your Account</h6>
            <ul>
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Your Addresses</li>
              <li>Your Favourits</li>
            </ul>
          </div>
        </div>
      </ul>
    </>
  );
};

export default ProfileController;
