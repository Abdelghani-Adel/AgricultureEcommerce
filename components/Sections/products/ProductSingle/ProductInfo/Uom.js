import { useEffect, useState } from "react";

const UnitOfMeasure = ({ item, UOMchangeHandler }) => {
  const [selectedUOM, setSelectedUOM] = useState("");

  useEffect(() => {
    const defaultUOMObject = item.uoms.filter((uom) => uom.UOM_Id_To == item.FAUOMID)[0];
    const defaultUOM = defaultUOMObject ? defaultUOMObject.UOMName : item.UOMName;
    setSelectedUOM(defaultUOM);
  }, []);
  return (
    <div>
      <select defaultValue={0} className="form-select me-3 uom_select" onChange={UOMchangeHandler}>
        <option value={0} disabled>
          {selectedUOM}
        </option>
        {item.uoms.map((unit, i) => (
          <option key={i} value={unit.UOM_Id_To}>
            {unit.UOMName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UnitOfMeasure;
