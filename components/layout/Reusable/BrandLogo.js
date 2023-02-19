import Link from "next/Link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { loaderActions } from "../../../redux/slices/loaderSlice";

const BrandLogo = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const showLoader = () => {
    if (router.pathname == "/") {
      return;
    }
    dispatch(loaderActions.showLoader());
  };

  return (
    <Link className="navbar-brand" href="/" onClick={showLoader}>
      <img src={"../img/logo.png"} alt="logo" />
    </Link>
  );
};

export default BrandLogo;
