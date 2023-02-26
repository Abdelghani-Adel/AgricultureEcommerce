import { withTranslation } from "react-multi-lang";

const AdvertiseTwo = (props) => {
  return (
    <div className="adv_2">
      <img
        src="https://fastly.picsum.photos/id/33/521/177.jpg?hmac=L4jhdUWoWTz7RjMHsU6TzbWZouEY3lokJ3D9_kVKiiQ"
        alt="agriculture_advertise"
        className="border_1 border_primary p-1"
      />

      <div className="border_2 border_primary p-1">
        <iframe
          className="iframe"
          src="https://www.youtube-nocookie.com/embed/Mz1fql7kr7g?enablejsapi=1"
          title="YouTube video player"
        ></iframe>
      </div>

      <img
        src="https://fastly.picsum.photos/id/492/521/177.jpg?hmac=h81F_8F-sSb5sxzOeMg3GcGQRcYPWX25Nbb75fqz8LM"
        alt="agriculture_advertise"
        className="border_1 border_primary p-1"
      />
    </div>
  );
};

export default withTranslation(AdvertiseTwo);
