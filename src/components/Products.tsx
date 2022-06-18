import React from "react";
import Image from "next/image";
import { Col, DebugGrid, Grid, Inline, Link, Row, Spacer, Text } from "vcc-ui";
import { GetServerSideProps } from "next";

interface IProductInfo {
  carInfo: any;
}

export const Product: React.FC<IProductInfo> = (productInfo: IProductInfo) => {
  console.log(productInfo);
  return (
    <li>
      <Grid>
        <Row align="start">
          <Col size={12}>
            <Text
              extend={{ textTransform: "uppercase", color: "#707070" }}
              variant="bates"
              subStyle="emphasis"
            >
              {productInfo.carInfo.bodyType}
            </Text>
          </Col>
        </Row>

        <Row align="start">
          <Col size={2}>
            <Text subStyle="emphasis">{productInfo.carInfo.modelName}</Text>
          </Col>
          <Col size={2}>
            <Text extend={{ color: "gray" }}>
              {productInfo.carInfo.modelType}
            </Text>
          </Col>
        </Row>
        <Row>
          <Image
            src={productInfo.carInfo.imageUrl}
            alt={productInfo.carInfo.modelName}
            width={600}
            height={500}
          />
        </Row>
        <Spacer />
        <Row align="center">
          <Link
            href={`/learn-${productInfo.carInfo.id}`}
            arrow="right"
            style={{ paddingRight: "1rem" }}
          >
            Learn
          </Link>
          <Link
            href={`/shop-${productInfo.carInfo.id}`}
            arrow="right"
            style={{ paddingLeft: "1rem" }}
          >
            Shop
          </Link>
        </Row>
      </Grid>
    </li>
  );
};
