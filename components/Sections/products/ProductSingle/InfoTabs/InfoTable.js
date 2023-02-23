const InfoTable = (props) => {
  return (
    <ul>
      {props.dataArray.map((info, index) => (
        <li key={info} className="d-flex">
          <span className="me-3">{index + 1 + ")"}</span>
          <span dangerouslySetInnerHTML={{ __html: info.desc }}></span>
        </li>
      ))}
    </ul>
  );
};

export default InfoTable;
