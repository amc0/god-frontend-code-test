import React from "react";
import Image from "next/image";
import { Col, Grid, Link, Row, Spacer, Text } from "vcc-ui";
import { CarsInfo } from "../../types/CarsInfo";

interface IProductProps {
  isMobile: boolean;
  productIndex: number;
  carInfo: CarsInfo;
  setProductRef: (element: HTMLLIElement | null, index: number) => void;
}

export const Product: React.FC<IProductProps> = (props) => {
  return (
    <li
      className="product"
      ref={(li) => props.setProductRef(li, props.productIndex)}
      id={`car-${props.productIndex}`}
    >
      <Grid>
        <Row align="start">
          <Col size={12}>
            <Text
              extend={{ textTransform: "uppercase", color: "#707070" }}
              variant="bates"
              subStyle="emphasis"
            >
              {props.carInfo.bodyType}
            </Text>
          </Col>
        </Row>

        <Row align="start">
          <Col size={6}>
            <Text subStyle="emphasis">{props.carInfo.modelName}</Text>
          </Col>
          <Col size={6}>
            <Text extend={{ color: "gray" }}>{props.carInfo.modelType}</Text>
          </Col>
        </Row>
        <Spacer />
        <Row>
          <Image
            src={props.carInfo.imageUrl}
            alt={props.carInfo.modelName}
            width={400}
            height={300}
          />
        </Row>
        <Spacer />
        <Row align="center">
          <Link
            href={`/learn/${props.carInfo.id}`}
            arrow="right"
            style={{ margin: "0 1rem" }}
            
          >
            Learn
          </Link>
          <Link
            href={`/shop/${props.carInfo.id}`}
            arrow="right"
            style={{ margin: "0 1rem" }}
          >
            Shop
          </Link>
        </Row>
      </Grid>
      <style jsx>
        {`
          .product {
            flex: 0 0 ${props.isMobile ? "85%" : "25%"};

            display: flex;
            padding: 0 ($spacing / 2);
            box-sizing: border-box;

            list-style-type: none;
            scroll-snap-align: start;
          }
        `}
      </style>
    </li>
  );
};
