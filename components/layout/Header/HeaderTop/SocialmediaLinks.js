import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const SocialmediaLinks = () => {
  return (
    <ul className="andro_header-top-sm andro_sm">
      <li>
        <Link href="#">
          <FaFacebookF />
        </Link>
      </li>
      <li>
        <Link href="#">
          <FaTwitter />
        </Link>
      </li>
      <li>
        <Link href="#">
          <FaLinkedinIn />
        </Link>
      </li>
      <li>
        <Link href="#">
          <FaYoutube />
        </Link>
      </li>
    </ul>
  );
};

export default SocialmediaLinks;
