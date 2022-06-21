import React from "react";
import { TabNav, TabNavItem } from "vcc-ui";

interface IFilterbarProps {
  bodyTypes: string[];
  selectedBodyType: string;
  setBodyType: (bodyType: string) => void;
}

export const FilterBar: React.FC<IFilterbarProps> = (props) => {
  return (
    <div className="filter-bar-wrapper">
      <TabNav>
        <TabNavItem
          onClick={(e) => props.setBodyType("")}
          isActive={props.selectedBodyType === ""}
        >
          All
        </TabNavItem>
        {props.bodyTypes.map((type, index) => (
          <TabNavItem key={index} onClick={(e) => props.setBodyType(type)}>
            <span className="brand-type">{type}</span>
          </TabNavItem>
        ))}
      </TabNav>

      <style jsx>{`
        .brand-type {
          text-transform: capitalize;
        }
      `}</style>
    </div>
  );
};
