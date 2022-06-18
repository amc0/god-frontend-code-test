import "../public/css/styles.css";
import React from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";
import response from "../public/api/cars.json";
import { ProductsCarousel } from "./../src/components/ProductsCarousel";
import { CarsInfo } from "../types/CarsInfo";

function HomePage() {
  const cars = response as CarsInfo[];

  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <ProductsCarousel products={cars} />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
