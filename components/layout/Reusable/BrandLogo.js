import Link from "next/link";

const BrandLogo = () => {
  return (
    <Link className="navbar-brand" href="/">
      <img src={"../img/logo.png"} alt="logo" />
    </Link>
  );
};

export default BrandLogo;
