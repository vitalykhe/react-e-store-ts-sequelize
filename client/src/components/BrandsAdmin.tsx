import React, { FC, useContext, useEffect, useState } from "react";
import { ListGroup, Form, Button, Row, Col, Container } from "react-bootstrap";
import { Brand } from "../utils/types";
import { fetchBrands, deleteBrand, createBrand, updateBrandsArr } from "../http/deviceAPI";
import { Context } from "..";

interface Props {}

/**
 * @author
 * @function BrandsAdmin
 **/

export const BrandsAdmin: FC<Props> = (props) => {
  
  const { devices } = useContext(Context)
  const [deviceBrands, setDeviceBrands] = useState<Brand[]>([])
  const [addNewBrand, setAddNewBrand] = useState(false)
  const [newBrandName, setNewBrandBrandName] = useState('')
  const [changesBrandsSaved, setChangesBrandsSaved] = useState(true)

  useEffect(() => {
    fetchBrands().then((brands) => {
      setDeviceBrands(brands);
      devices?.setBrands(brands)
    });
  }, [devices]);

  function saveBrand(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
    brandId: number
  ) {
    
  }

  function updateBrands(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    brandId: number
  ) {
    const updatedControls = deviceBrands.map((brand) => {
      if (brandId !== brand.id) return brand;
      else {
        return { ...brand, name: e.target.value };
      }
    });
    setDeviceBrands(updatedControls);
    setChangesBrandsSaved(false)
  }

  const callDeleteBrand = (id: number) => {

    deleteBrand(id).then((res) => {
      setDeviceBrands(res);
      devices?.setBrands(res)
    });
  };

  const addNewBrandBrand = () => {
    if(addNewBrand && newBrandName.length > 0) {
      createBrand({name: newBrandName}).then(() => {
        fetchBrands().then((res) => {
          // setChangesBrandsSaved(true)
          setDeviceBrands(res)
          devices?.setBrands(res)
        })
      })
      setNewBrandBrandName('')
      setAddNewBrand(false)
    }
    else setAddNewBrand(true)
  }

  const saveBrandsChanges = () => {
    updateBrandsArr(deviceBrands).then(()=>{
      setChangesBrandsSaved(!changesBrandsSaved)
      fetchBrands().then((res) => {
        setDeviceBrands(res)
        devices?.setBrands(res)
      })
    })
  }

  return (
    <Container>
      <Row>
        <Col>
        <div className="m-2"><h3>Edit brands</h3></div>
        </Col>
      </Row>
      <ListGroup as="ul" style={{ width: 600 }}>
        {deviceBrands.map((brand) => {
          return (
            <ListGroup.Item key={brand.id}>
              <Row>
                <Col md={10}>
                  <Form.Control
                    type="text"
                    placeholder={brand.name}
                    onBlur={(e) => saveBrand(e, brand.id)}
                    value={brand.name}
                    onChange={(e) => updateBrands(e, brand.id)}
                  />
                </Col>
                <Col md={2}>
                  <Button variant="danger" onClick={() => callDeleteBrand(brand.id)}>X</Button>
                </Col>
              </Row>
            </ListGroup.Item>
          );
        })}
        <ListGroup.Item>

        <Row>
            <Col md={10}>
                  { addNewBrand ? 
                    <Form.Control
                      type="text"
                      value={newBrandName}
                      onChange={(e) => {setNewBrandBrandName(e.target.value)}}
                      placeholder='Enter brand name'
                    />
                  : ''
                  }
                </Col>
                <Col md={2}>
                  <Button onClick={() => addNewBrandBrand()}>{!addNewBrand? 'add': 'save'}</Button>
                </Col>
              </Row>
        </ListGroup.Item>
      </ListGroup>
      {!changesBrandsSaved ? <Button className="mt-2" onClick={() => saveBrandsChanges()}>Save changes</Button> : '' }
        
    </Container>
  );
};
