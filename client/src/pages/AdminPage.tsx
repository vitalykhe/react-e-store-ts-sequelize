import React, { FC, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BrandsAdmin } from "../components/BrandsAdmin";
import { TypesAdmin } from "../components/TypesAdmin";
import { CreateDevice } from "../components/modals/CreateDevice";

interface Props {}

/**
 * @author VitalyKhe
 * @function AdminPage
 **/

const AdminPage: FC<Props> = (props) => {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <Container fluid="md">
      <Row>
        <Col className="m-1 mt-3 mb-3">
          <Button onClick={handleShow}>Create device</Button>
          <CreateDevice
        show={show}
        onHide={() => setShow(false)}
      />
        </Col>
      </Row>
      <Row>
        <TypesAdmin />
      </Row>
      <Row>
        <BrandsAdmin />
      </Row>
    </Container>
  );
};

export default AdminPage;
