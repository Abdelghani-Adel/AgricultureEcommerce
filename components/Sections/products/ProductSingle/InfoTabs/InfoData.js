const InfoData = (props) => {
  const active = props.selecte == "true";
  const data = props.data;
  return (
    <div
      className={`tab-pane fade show ${active ? "active" : ""}`}
      id={props.id}
      role="tabpanel"
      aria-labelledby="v-pills-home-tab"
    >
      {data && data.length > 0 ? (
        <div dangerouslySetInnerHTML={{ __html: data[0].desc }}></div>
      ) : (
        "No ingredients found"
      )}
    </div>
  );
};

export default InfoData;
