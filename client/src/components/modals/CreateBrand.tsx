import React, { FC } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

interface IProps {
  show: boolean;
  onHide: () => void;
}

/**
 * @author
 * @function @CreateBrand
 **/

export const CreateBrand: FC<IProps> = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="sm" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new brand
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder={"Enter brand name"} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline"} onClick={() => {}}>
          Add
        </Button>
        <Button variant={"outline"} onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
