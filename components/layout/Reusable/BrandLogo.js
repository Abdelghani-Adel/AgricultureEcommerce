import Link from "next/Link";

const BrandLogo = () => {
  return (
    <Link className="navbar-brand" href="/">
      <img src={"../img/logo.png"} alt="logo" />
    </Link>
  );
};

export default BrandLogo;
