import React, { useState } from "react";
import { CarsInfo } from "../../types/CarsInfo";
import { CarouselDots } from "./CarouselDots";
import { Product } from "./Products";

interface IProductsCarouselProps {
  products: CarsInfo[];
}

export const ProductsCarousel: React.FC<IProductsCarouselProps> = (props) => {
  const [currActive, setCurrActive] = useState(0);

  return (
    <div className="my-12 mx-auto">
      <div className="relative overflow-hidden">
        {props.products.map((car) => (
          <Product carInfo={car} key={car.id} />
        ))}
      </div>
      <CarouselDots
        length={props.products.length}
        currActive={currActive}
        setCurrActive={setCurrActive}
      />
    </div>
  );
};
