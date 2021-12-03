import { observer } from "mobx-react-lite";
import React, { FC, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
import { Star } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { fetchDevice } from "../http/deviceAPI";
import { Device } from "../utils/types";

interface IProps {}

/**
 * @author
 * @function @DevicePage
 **/

export const DevicePage: FC<IProps> = observer(() => {
  const [device, setDevice] = useState<Device>();

  type Params = {
    id: string;
  };

  const { id } = useParams<Params>();

  useEffect(() => {
    fetchDevice(parseInt(id)).then((data) => {
      setDevice(data as Device);
    });
  }, [id]);

  return (
    <Container>
      <Row>
        <Col className="m-3">
          <div>
            <Image
              src={process.env.REACT_APP_SERVER_API_URL + "/" + device?.img_url}
              style={{ border: "1px solid lightgrey", borderRadius: 3 }}
            />
          </div>
        </Col>
        <Col className="m-3">
          <Card>
            <Card.Body>
              <Card.Title>{device?.name}</Card.Title>
              <Card.Text>{device?.description}</Card.Text>
              <div className="mb-4">
                <Star color={"red"} /> Rating: {device?.rating}
              </div>

              {device?.device_info.map((property) => (
                <Row key={property.id}>
                  <Col>{property.property_name}</Col>
                  <Col>{property.property_value}</Col>
                </Row>
              ))}

              <Card.Text className="mt-3">Price: {device?.price}$</Card.Text>
              <Button variant="primary" className="mt-3">
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
});
