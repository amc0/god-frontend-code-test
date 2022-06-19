import "../public/css/styles.css";
import React, { useState } from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";
import response from "../public/api/cars.json";
import { ProductsCarousel } from "./../src/components/ProductsCarousel";
import { CarsInfo } from "../types/CarsInfo";
import { FilterBar } from "../src/components/FilterBar";
import { NextPageContext } from "next";

interface HomePageProps {
  cars: CarsInfo[];
}

function HomePage(props: HomePageProps) {
  const [bodyType, setBodyType] = useState("");

  const bodyTypes = props.cars
    .map((nextCar) => nextCar.bodyType)
    .filter((val, index, self) => self.indexOf(val) === index);

  const filteredCars = props.cars.filter(
    (car) => car.bodyType === bodyType || bodyType === ""
  );
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <FilterBar
            bodyTypes={bodyTypes}
            selectedBodyType={bodyType}
            setBodyType={setBodyType}
          />
          <ProductsCarousel products={filteredCars} />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

HomePage.getInitialProps = async (context: NextPageContext) => {
  return { cars: response as CarsInfo[] };
};

export default HomePage;
