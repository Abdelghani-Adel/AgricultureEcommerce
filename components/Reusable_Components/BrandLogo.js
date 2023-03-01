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
    <Link className="navbar-brand" href="/" onClick={showLoader}>
      <Image src={"/img/logo.png"} alt="logo" width={150} height={50} />
    </Link>
  );
};

export default BrandLogo;
