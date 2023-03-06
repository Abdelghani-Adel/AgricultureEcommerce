import Link from "next/Link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { loaderActions } from "../../redux/slices/loaderSlice";
import Image from "next/image";
import Logo from "../../public/img/logo.png";

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
      <Image src={Logo} alt="logo" fill priority sizes="(min-width: 768px) 100vw, 33vw" />
    </Link>
  );
};

export default BrandLogo;
