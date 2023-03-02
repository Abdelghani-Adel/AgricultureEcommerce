import { withTranslation } from "react-multi-lang";
import Image from "next/image";

const AdvertiseTwo = (props) => {
  return (
    <div className="adv_2 border_1">
      <div className="adv_2--thumb position-relative">
        <Image
          src="https://fastly.picsum.photos/id/33/521/177.jpg?hmac=L4jhdUWoWTz7RjMHsU6TzbWZouEY3lokJ3D9_kVKiiQ"
          alt="agriculture_advertise"
          className="border-raduis_12 p-1"
          fill
          sizes="100%"
          style={{ objectFit: "fill" }}
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
          src="https://fastly.picsum.photos/id/33/521/177.jpg?hmac=L4jhdUWoWTz7RjMHsU6TzbWZouEY3lokJ3D9_kVKiiQ"
          alt="agriculture_advertise"
          className="border-raduis_12 p-1"
          fill
          sizes="100%"
          style={{ objectFit: "fill" }}
          priority
        />
      </div>
    </div>
  );
};

export default withTranslation(AdvertiseTwo);
