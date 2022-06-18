import React from "react";
import { CarsInfo } from "../../types/CarsInfo";
import { Product } from "./Products";

interface IProductsCarouselProps {
  length: number;
  currActive: number;
  setCurrActive: (selected: number) => void;
}

export const CarouselDots: React.FC<IProductsCarouselProps> = (props) => {
  return (
    <div className="dots-wrapper">
      {[...Array(props.length)].map((x, i) => (
        <span
          key={i}
          className={`dot ${props.currActive === i ? "isActive" : ""}`}
          onClick={() => props.setCurrActive(i)}
        ></span>
      ))}
      <style jsx>
        {`
          .dots-wrapper {
            cursor: pointer;
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .dot {
            height: 0.75rem;
            width: 0.75rem;
            border-radius: 50%;
            background-color: #ebebeb;
            display: inline-block;
            margin: 0.25rem;
          }
          .dot.isActive {
            background-color: #141414;
          }
        `}
      </style>
    </div>
  );
};
