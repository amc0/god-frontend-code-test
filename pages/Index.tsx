import React, { useState } from "react";
import { NextPageContext } from "next";
import Head from "next/head";
import { Nav, StyleProvider, ThemePicker } from "vcc-ui";
import response from "../public/api/cars.json";
import { ProductsCarousel } from "./../src/components/ProductsCarousel";
import { CarsInfo } from "../types/CarsInfo";
import { FilterBar } from "../src/components/FilterBar";

interface HomePageProps {
  cars: CarsInfo[];
}

const Home: React.FC<HomePageProps> = (props) => {
  const [bodyType, setBodyType] = useState("");

  const bodyTypes = props.cars
    .map((nextCar) => nextCar.bodyType)
    .filter((val, index, self) => self.indexOf(val) === index);

  const filteredCars = props.cars.filter(
    (car) => car.bodyType === bodyType || bodyType === ""
  );
  return (
    <React.StrictMode>
      <Head>
        <html lang="en" />
        <title>Volvo - Cars list</title>
      </Head>
      <StyleProvider>
        <ThemePicker variant="light">
          <Nav>
            <FilterBar
              bodyTypes={bodyTypes}
              selectedBodyType={bodyType}
              setBodyType={setBodyType}
            />
          </Nav>
          <ProductsCarousel products={filteredCars} />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  return { props: { cars: response as CarsInfo[] } };
}

export default Home;
