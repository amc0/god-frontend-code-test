import React, { useState } from "react";
import { CarsInfo } from "../../types/CarsInfo";
import { CarouselButtons } from "./CarouselButtons";
import { CarouselDots } from "./CarouselDots";
import { Product } from "./Product";

interface IProductsCarouselProps {
  products: CarsInfo[];
}

export const ProductsCarousel: React.FC<IProductsCarouselProps> = (props) => {
  const [currActive, setCurrActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="my-12 mx-auto">
      <ul className="products-list">
        {props.products.map((car) => (
          <Product carInfo={car} key={car.id} />
        ))}
      </ul>
      {isMobile ? (
        <CarouselDots
          length={props.products.length}
          currActive={currActive}
          setCurrActive={setCurrActive}
        />
      ) : (
        <CarouselButtons
          length={props.products.length}
          setCurrActive={setCurrActive}
          currActive={currActive}
        />
      )}
      <style jsx>
        {`
          .products-list {
            display: flex;
          }
        `}
      </style>
    </div>
  );
};
