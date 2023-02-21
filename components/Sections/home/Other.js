import { withTranslation } from "react-multi-lang";

const Other = (props) => {
  return (
    <div className="col-6 col-lg-2 col-xs-12">
      <div className=" andro_banner other_banner">
        <img
          src="https://fastly.picsum.photos/id/33/521/177.jpg?hmac=L4jhdUWoWTz7RjMHsU6TzbWZouEY3lokJ3D9_kVKiiQ"
          alt="agriculture_advertise"
          style={{ marginBottom: "10px" }}
          className="img_border"
        />

        <div className="frame-wrapper">
          <iframe
            className="iframe"
            src="https://www.youtube-nocookie.com/embed/Mz1fql7kr7g?enablejsapi=1"
            title="YouTube video player"
          ></iframe>
        </div>

        <img
          src="https://fastly.picsum.photos/id/492/521/177.jpg?hmac=h81F_8F-sSb5sxzOeMg3GcGQRcYPWX25Nbb75fqz8LM"
          alt="agriculture_advertise"
          style={{ marginTop: "10px" }}
          className="img_border"
        />
      </div>
    </div>
  );
};

export default withTranslation(Other);
