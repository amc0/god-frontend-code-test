import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useRef, useState } from "react";
import { SelectInput } from "vcc-ui";

interface IFilterbarProps {
  bodyTypes: string[];
  selectedBodyType: string;
  setBodyType: (bodyType: string) => void;
}

export const FilterBar: React.FC<IFilterbarProps> = (props) => {
  return (
    <div className="filter-bar-wrapper">
      <SelectInput
        label={"Body type"}
        value={props.selectedBodyType}
        onChange={(e) => props.setBodyType(e.target.value)}
      >
        <option value={""}></option>
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
