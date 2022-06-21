import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "vcc-ui";
import { CarsInfo } from "../../types/CarsInfo";
import { CarouselButtons } from "./CarouselButtons";
import { CarouselDots } from "./CarouselDots";
import { Product } from "./Product";

interface IProductsCarouselProps {
  products: CarsInfo[];
}

export const ProductsCarousel: React.FC<IProductsCarouselProps> = (props) => {
  const { breakpoints } = useTheme();

  const [currActive, setCurrActive] = useState(0);
  const [mobileBreakpoint, setMobileBreakpoint] = useState(480);
  const [isMobile, setIsMobile] = useState(false);

  const carouselRef = useRef<HTMLUListElement>(null);
  const productRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    let match = /\d+/.exec(breakpoints.fromM);
    let mobileBreakpoint = match ? parseInt(match[0]) : 480;

    setMobileBreakpoint(mobileBreakpoint);
    setIsMobile(window.innerWidth < mobileBreakpoint);
  }, [breakpoints]);

  useEffect(() => {
    window.addEventListener("resize", reportWindowSize);

    return function cleanup() {
      window.removeEventListener("resize", reportWindowSize);
    };
  });

  const reportWindowSize = (event: UIEvent) => {
    const target = event.target as Window;

    setIsMobile(target.innerWidth < mobileBreakpoint ? true : false);
  };

  useEffect(() => {
    if (currActive <= props.products.length && !isMobile)
      handleScroll(currActive);
  }, [currActive, props.products.length, isMobile]);

  const setProductRef = (element: HTMLLIElement | null, index: number) =>
    (productRefs.current[index] = element);

  useEffect(() => {
    if (!isMobile) return;
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = (productRefs.current as Element[]).indexOf(
            entry.target
          );
          setCurrActive(index);
        }
      });
    };
    const observer = new IntersectionObserver(callback, {
      root: carouselRef.current,
      threshold: 0.9,
    });
    productRefs.current
      .filter((h) => h !== undefined)
      .forEach((product) => {
        if (product) observer.observe(product);
      });
    return function cleanup() {
      observer.disconnect();
    };
  }, [props.products, isMobile]);

  const mobileSetCurrent = (index: number) => {
    setCurrActive(index);
    handleScroll(index);
  };

  const handleScroll = (index: number) => {
    let ref = productRefs.current[index];

    if (carouselRef && carouselRef.current) {
      carouselRef.current.scrollTo({
        left: ref?.offsetLeft,
        behavior: "auto",
      });
    }
  };

  return (
    <div className="carousel-wrapper">
      <ul className="products-list" ref={carouselRef}>
        {props.products.map((car, index) => (
          <Product
            carInfo={car}
            key={car.id}
            isMobile={isMobile}
            productIndex={index}
            setProductRef={setProductRef}
          />
        ))}
      </ul>
      {isMobile ? (
        <CarouselDots
          length={props.products.length}
          currActive={currActive}
          setCurrActive={mobileSetCurrent}
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
            padding: unset;

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
