import Link from "next/Link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { loaderActions } from "../../redux/slices/loaderSlice";
import Image from "next/image";

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
    <Link className="navbar-brand position-relative" href="/" onClick={showLoader}>
      <Image src={"/img/logo.png"} alt="logo" fill priority sizes="100%" />
    </Link>
  );
};

export default BrandLogo;
