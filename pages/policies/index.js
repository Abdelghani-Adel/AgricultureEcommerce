import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Reusable_Components/Breadcrumbs";
import Cookies from "../../components/Sections/policies/Cookies";
import Privacy from "../../components/Sections/policies/Privacy";
import Return from "../../components/Sections/policies/Return";
import Terms from "../../components/Sections/policies/Terms";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";

const Policy = (props) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const type = router.query.type;
  const lang = useSelector((state) => state.lang);

  useEffect(() => {
    switch (type) {
      case "privacy":
        setTitle(props.t("Policy.Privacy"));
        return;
      case "return":
        setTitle(props.t("Policy.Return"));
        return;
      case "cookies":
        setTitle(props.t("Policy.Cookies"));
        return;
      case "terms":
        setTitle(props.t("Policy.Terms"));
        return;
    }
  });

  const renderpolicy = () => {
    switch (type) {
      case "privacy":
        return <Privacy title={title} />;
      case "return":
        return <Return title={title} />;
      case "cookies":
        return <Cookies title={title} />;
      case "terms":
        return <Terms title={title} />;
    }
  };
  return (
    <>
      <Breadcrumbs breadcrumb={{ pagename: title }} />
      {renderpolicy()}
    </>
  );
};

export default withTranslation(Policy);
