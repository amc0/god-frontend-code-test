import React, { useEffect, useRef, useState } from "react";
import { SelectInput, TabNav, TabNavItem } from "vcc-ui";

interface IFilterbarProps {
  bodyTypes: string[];
  selectedBodyType: string;
  setBodyType: (bodyType: string) => void;
}

export const FilterBar: React.FC<IFilterbarProps> = (props) => {
  return (
    <div className="filter-bar-wrapper">
      <TabNav>
        <TabNavItem onClick={(e) => props.setBodyType("")}>All</TabNavItem>
        {props.bodyTypes.map((type, index) => (
          <TabNavItem
            key={index}
            onClick={(e) => props.setBodyType(type)}
            style={{ textTransform: "capitalize" }}
          >
            {type}
          </TabNavItem>
        ))}
      </TabNav>
    </div>
  );
};
