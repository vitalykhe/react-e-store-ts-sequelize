import { observer } from "mobx-react-lite";
import React, { FC, useContext, useEffect, useState } from "react";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { fetchTypes, fetchBrands, createDevice } from "../../http/deviceAPI";
import { Context } from "../../index";
import { DeviceProperty, DevicePropertyKey, CreateDeviceFormInterfaceKey } from '../../utils/types'

interface IProps {
  show: boolean;
  onHide: () => void;
}

interface MyFormData extends FormData {
  append(name: CreateDeviceFormInterfaceKey, value: string | Blob, fileName?: string): void;
}

/**
 * @author
 * @function @CreateDevice
 **/

export const CreateDevice: FC<IProps> = observer(({ show, onHide }) => {



  const { devices } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((types) => devices?.setTypes(types));
    fetchBrands().then((brands) => devices?.setBrands(brands));
  }, [devices]);

  const [deviceProperties, setDeviceProperties] = useState<DeviceProperty[]>([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [file, setFile] = useState<File | null>(null);


  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0])
  }

  const addNewProp = () => {
    setDeviceProperties([
      ...deviceProperties,
      {
        property_name: "",
        property_value: "",
        uniqueKey: Date.now(),
      },
    ])
  };

  const removeProp = (uniqueKey: number): void => {
    setDeviceProperties(
      deviceProperties.filter((property) => property.uniqueKey !== uniqueKey)
    );
  };

  const editProperty = (key: DevicePropertyKey, value: string, uk: number) => {
    setDeviceProperties(
      deviceProperties.map(prop => prop.uniqueKey === uk ? { ...prop, [key]: value } : prop)
    )

  }


  
  const addDevice = () => {
    if (devices) {
      const brandId = devices.getSelectedBrand()
      const typeId = devices.getSelectedType()
      if (brandId && typeId && file) {
        const formData:MyFormData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price.toString());
        formData.append('img_url', file);
        formData.append('brandId', brandId.toString());
        formData.append('typeId', typeId.toString());
        formData.append('device_info', JSON.stringify(deviceProperties));
        createDevice(formData)
        onHide()
      } else console.log('Form is not valid. Each field required.')
    } else console.log('Form is not valid. Each field required.')
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="m-1">
            <Dropdown.Toggle>
              {devices?.getSelectedTypeObject()?.name || "Choose type"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {devices?.getTypes()?.map((type) => (
                <Dropdown.Item
                  key={type.id}
                  onClick={() => devices.setSelectedType(type.id)}
                >
                  {" "}
                  {type.name}{" "}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="m-1">
            <Dropdown.Toggle>
              {devices?.getSelectedBrandObject()?.name || "Choose brand"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {devices?.getBrands()?.map((brand) => (
                <Dropdown.Item
                  key={brand.id}
                  onClick={() => devices.setSelectedBrand(brand.id)}
                >
                  {" "}
                  {brand.name}{" "}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            value={name}
            placeholder={"Device name"}
            className="m-1"
            onChange={(e) => setName(e.target.value)}
          />

          <Form.Control
            value={description}
            placeholder={"Device description"}
            className="m-1"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Form.Control
            value={price}
            placeholder={"Device price"}
            type={"number"}
            className="m-1"
            onChange={(e) => setPrice(Number(e.target.value))}
          />

          <Form.Control
            placeholder={"Choose file"}
            type={"file"}
            className="m-1"
            onChange={selectFile}
          />
          <hr />
          {deviceProperties.map((property) => (
            <Row key={property.uniqueKey} className="m-3">
              <Col>
                <Form.Control placeholder={"title"} className="m-1"
                  onChange={
                    (e) => editProperty('property_name', e.target.value, property.uniqueKey)
                  }
                />
              </Col>
              <Col>
                <Form.Control placeholder={"description"} className="m-1"
                  onChange={
                    (e) => editProperty('property_value', e.target.value, property.uniqueKey)
                  }
                />
              </Col>
              <Col>
                <Button
                  variant={"warning"}
                  onClick={() => removeProp(property.uniqueKey)}
                >
                  remove
                </Button>
              </Col>
            </Row>
          ))}
          <Button variant={'info'} onClick={addNewProp}>
            Create new property
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline"} onClick={addDevice}>
          Submit
        </Button>
        <Button variant={"outline"} onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
});
