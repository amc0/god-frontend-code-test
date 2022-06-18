import "../public/css/styles.css";
import React from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";
import { ProductsCarousel } from "./../src/components/ProductsCarousel";

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <ProductsCarousel />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
