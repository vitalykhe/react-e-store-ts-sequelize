import React, { FC } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Device } from "../utils/types";
import { Star } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

interface Props {
  device: Device;
}

/**
 * @author
 * @function DeviceItem
 **/

const DeviceItem: FC<Props> = ({ device }) => {
  const history = useHistory();
  return (
    <Col md={3} className="mt-3">
      <Card style={{ width: "11rem", height: "16rem" }}>
        <Card.Img variant="top" src={process.env.REACT_APP_SERVER_API_URL + "/" + device.img_url} width={120} height={120}/>
        <Card.Body onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)} style={{cursor: 'pointer'}}>
          <Card.Text>{device.name} <strong>{device.price}$</strong></Card.Text>
          {/* <Card.Text>
              {device.description}
            </Card.Text> */}
          <div className="mb-2">
            <Star color={"red"} /> Rating: {device.rating}
          </div>
        </Card.Body>
          <Button variant="primary">Add to cart</Button>
      </Card>
    </Col>
  );
};

export default DeviceItem;
