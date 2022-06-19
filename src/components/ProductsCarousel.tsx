import React, { ContextType, useEffect, useRef, useState } from "react";
import { CarsInfo } from "../../types/CarsInfo";
import { CarouselButtons } from "./CarouselButtons";
import { CarouselDots } from "./CarouselDots";
import { Product } from "./Product";
import { GetServerSideProps } from 'next';

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
    if (currActive + 4 <= props.products.length) handleScroll(currActive);
  }, [currActive, props.products.length]);

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      console.log("OBSER:", entries);
      entries.forEach((entry) => {
        console.log("IS: ", entry);
        if (!entry.isVisible) {
          const index = (productRefs.current as Element[]).indexOf(
            entry.target
          );
          if (
            productRefs &&
            productRefs.current &&
            productRefs.current[currActive]
          ) {
            console.log("UNOBSERVE: ", entry);
            observer.unobserve(productRefs.current[currActive]);
            //etCurrActive(currActive + 1);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: carouselRef.current,
      threshold: 0.9,
    });
    var product = productRefs.current.filter((h) => h !== undefined)[
      currActive
    ];

    console.log(product);

    if (product) observer.observe(product);

    return function cleanup() {
      observer.disconnect();
    };
  }, [props.products, currActive]);

  const handleScroll = (index: number) => {
    let ref = productRefs.current[index];

    if (carouselRef && carouselRef.current)
      carouselRef.current.scrollTo({
        left: ref?.offsetLeft,
        behavior: "smooth",
      });
  };

  return (
    <div className="carousel-wrapper">
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
          .carousel-wrapper {
            padding: 0;
          }
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

export const getServerSideProps : GetServerSideProps = async (context) => {
 
  return {
    props: {
      device: context.req.device,
    },
  }
}