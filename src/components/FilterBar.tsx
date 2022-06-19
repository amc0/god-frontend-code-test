import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useRef, useState } from "react";
import { SelectInput } from "vcc-ui";

interface IFilterbarProps {
  bodyTypes: string[];
}

export const FilterBar: React.FC<IFilterbarProps> = (props) => {
  const [value, setValue] = useState();

  return (
    <div className="filter-bar-wrapper">
      <SelectInput
        label={"Body type"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {props.bodyTypes.map((type, index) => (
          <option value={type} key={index}>
            {type}
          </option>
        ))}
      </SelectInput>
      <style jsx>{`
        .filter-bar-wrapper {
        }
      `}</style>
    </div>
  );
};
