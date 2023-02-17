import Link from "next/Link";
import { useDispatch } from "react-redux";
import { loaderActions } from "../../../redux/slices/loaderSlice";

const BrandLogo = () => {
  const dispatch = useDispatch();

  const showLoader = () => {
    dispatch(loaderActions.showLoader());
  };

  return (
    <Link className="navbar-brand" href="/" onClick={showLoader}>
      <img src={"../img/logo.png"} alt="logo" />
    </Link>
  );
};

export default BrandLogo;
