import { useEffect, useState } from "react";

const Preloader = (props) => {
  const [fetchSuccess, setFetchSuccess] = useState(false);
  const preloaderhidden = fetchSuccess ? "hidden" : "";
  useEffect(() => {
    window.addEventListener("load", () => {
      setFetchSuccess(true);
    });
  });

  return (
    <div className={`andro_preloader ${preloaderhidden}`}>
      <div className="spinner">
        <div className="dot1" />
        <div className="dot2" />
      </div>
    </div>
  );
};

export default Preloader;
