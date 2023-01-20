import Link from "next/link";

const CurrencyChange = () => {
  return (
    <ul className="andro_header-top-links">
      <li className="menu-item">
        <Link href="/login"> My Account </Link>
      </li>
      <li className="menu-item menu-item-has-children">
        <Link href="#">
          <span className="andro_current-currency-text">Currency</span>
          (USD)
        </Link>
        <ul className="sub-menu sub-menu-left">
          <li>
            <Link href="#">United States Dollar (USD)</Link>
          </li>
          <li>
            <Link href="#">Kuwait Dinar (KWD)</Link>
          </li>
          <li>
            <Link href="#">Pound Sterling (GBP)</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default CurrencyChange;
