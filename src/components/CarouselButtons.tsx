import React from "react";
import { CarsInfo } from "../../types/CarsInfo";
import { Product } from "./Product";

interface IProductsCarouselProps {
  length: number;
  currActive: number;
  setCurrActive: (selected: number) => void;
}

export const CarouselButtons: React.FC<IProductsCarouselProps> = (props) => {
  return (
    <div className="btns-wrapper">
      <button
        className="carousel-btn previous"
        style={{ transform: "rotate(180deg)" }}
        disabled={props.currActive == 0}
        onClick={() => props.setCurrActive(props.currActive - 1)}
      ></button>
      <button
        className="carousel-btn"
        disabled={props.currActive == props.length-1}
        onClick={() => props.currActive + 4 < props.length && props.setCurrActive(props.currActive + 1)}
      ></button>
      <style jsx>
        {`
          .btns-wrapper {
            position: absolute;
            right: 1rem;
          }
          .carousel-btn {
            cursor: pointer;
            border: unset;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='18.5' fill='white' stroke='%23333' stroke-width='1'%3E%3C/circle%3E%3Crect x='24.9141' y='20.3457' width='10.4911' height='0.5' rx='0.25' transform='rotate(-135 24.9141 20.3457)' fill='none' stroke='%23333' stroke-width='1'%3E%3C/rect%3E%3Crect x='17.4942' y='27.0703' width='10.4758' height='0.5' rx='0.25' transform='rotate(-45 17.4942 27.0703)' fill='none' stroke='%23333' stroke-width='1'%3E%3C/rect%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: center;
            background-color: unset;
          }
        `}
      </style>
    </div>
  );
};
