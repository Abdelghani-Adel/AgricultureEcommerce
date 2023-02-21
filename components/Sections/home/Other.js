import { withTranslation } from "react-multi-lang";

const Other = (props) => {
  return (
    <div className="col-6 col-lg-2 col-xs-12">
      <div className=" andro_banner other_banner">
        <img
          src="https://fastly.picsum.photos/id/33/521/177.jpg?hmac=L4jhdUWoWTz7RjMHsU6TzbWZouEY3lokJ3D9_kVKiiQ"
          alt="agriculture_advertise"
          style={{ marginBottom: "10px" }}
        />

        <iframe
          width="100%"
          height="150px"
          src="http://admin.zera3amarket.com/Videos/Video2.mp4"
          title="YouTube video player"
          crossOrigin="anonymous"
        ></iframe>

        <img
          src="https://fastly.picsum.photos/id/492/521/177.jpg?hmac=h81F_8F-sSb5sxzOeMg3GcGQRcYPWX25Nbb75fqz8LM"
          alt="agriculture_advertise"
          style={{ marginTop: "10px" }}
        />
      </div>
    </div>
  );
};

export default withTranslation(Other);
