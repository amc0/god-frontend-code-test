import React, { useEffect, useRef, useState } from "react";
import { CarsInfo } from "../../types/CarsInfo";
import { CarouselButtons } from "./CarouselButtons";
import { CarouselDots } from "./CarouselDots";
import { Product } from "./Product";

interface IProductsCarouselProps {
  products: CarsInfo[];
}

export const ProductsCarousel: React.FC<IProductsCarouselProps> = (props) => {
  const carouselRef = useRef<HTMLUListElement>(null);
  const productRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [currActive, setCurrActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const setProductRef = (element: HTMLLIElement | null, index: number) =>
    (productRefs.current[index] = element);

  useEffect(() => {
    if (currActive + 4 <= props.products.length)
    handleScroll(currActive);
  }, [currActive, props.products.length]);

  // useEffect(() => {
  //   const callback: IntersectionObserverCallback = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         const index = (productRefs.current as Element[]).indexOf(
  //           entry.target
  //         );
  //         // setCurrActive(index);
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(callback, {
  //     root: carouselRef.current,
  //     threshold: 0.8,
  //   });
  //   productRefs.current
  //     .filter((h) => h !== undefined)
  //     .forEach((product) => {
  //       console.log("INTERSECT: ", product);
  //       if (product) observer.observe(product);
  //     });

  //   return function cleanup() {
  //     observer.disconnect();
  //   };
  // }, [props.products]);

  const handleScroll = (index: number) => {
    let ref = productRefs.current[index];

    carouselRef.current.scrollTo({
      left: ref?.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <ul className="products-list" ref={carouselRef}>
        {props.products.map((car, index) => (
          <Product
            carInfo={car}
            key={car.id}
            productIndex={index}
            setProductRef={setProductRef}
          />
        ))}
      </ul>
      {!isMobile ? (
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
            flex-direction: row;
            overflow-x: auto;

            scroll-snap-type: x mandatory;
            overscroll-behavior: contain;

            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .products-list::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};
