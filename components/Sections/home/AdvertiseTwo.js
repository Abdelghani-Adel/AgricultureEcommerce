import { withTranslation } from "react-multi-lang";
import Image from "next/image";
import Adv2 from "../../../public/img/adv2.jpg";

const AdvertiseTwo = (props) => {
  return (
    <div className="adv_2 border_1">
      <div className="adv_2--thumb position-relative">
        <Image
          src={Adv2}
          alt="agriculture_advertise"
          className="border-raduis_12 p-1"
          fill
          sizes="(min-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <hr />

      <div className="border-raduis_12 p-1">
        <iframe
          className="iframe"
          src="https://www.youtube-nocookie.com/embed/Mz1fql7kr7g?enablejsapi=1"
          title="YouTube video player"
        ></iframe>
      </div>
      <hr />
      <div className="adv_2--thumb position-relative">
        <Image
          src={Adv2}
          alt="agriculture_advertise"
          className="border-raduis_12 p-1"
          fill
          sizes="(min-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </div>
  );
};

export default withTranslation(AdvertiseTwo);
