import React from "react";
import Image from "next/image";
import { Col, DebugGrid, Grid, Inline, Link, Row, Text } from "vcc-ui";
import { GetServerSideProps } from "next";

interface IProductInfo {
  carInfo: any;
}

export const Product: React.FC<IProductInfo> = (productInfo: IProductInfo) => {
  console.log(productInfo);
  return (
    <Grid>
      <Row align="start">
        <Col size={12}>
          <Text
            extend={{ textTransform: "uppercase", color: "gray" }}
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
      <Row align="center">
        <Col size={2}>
          <Link href={`/learn-${productInfo.carInfo.id}`} arrow="right">
            Learn
          </Link>
        </Col>
        <Col size={2}>
          <Link href={`/shop-${productInfo.carInfo.id}`} arrow="right">
            Shop
          </Link>
        </Col>
      </Row>
    </Grid>
  );
};
