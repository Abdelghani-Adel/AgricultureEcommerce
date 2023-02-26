import Link from "next/Link";
import { useState } from "react";
import { useEffect } from "react";
import { FaHandPointer } from "react-icons/fa";

const BackTopTopBtn = () => {
  const [hidden, setHidden] = useState(true);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link href="#" className={`back-to-top ${!hidden ? "show" : ""}`} onClick={scrollToTop}>
      <span>
        <FaHandPointer />
      </span>
    </Link>
  );
};

export default BackTopTopBtn;
