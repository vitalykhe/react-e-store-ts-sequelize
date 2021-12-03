import { observer } from 'mobx-react-lite'
import React, { FC, useContext } from 'react'
import { Row } from 'react-bootstrap'
import { Context } from '../index'
import { v4 as uuidv4 } from 'uuid';
import DeviceItem from '../components/DeviceItem';

interface Props {
}

/**
* @author 
* @function DevicesList
**/

const DevicesList:FC<Props> = observer(
  (props) => {
  const { devices } = useContext(Context)

    return (
      <Row className="d-flex">
        {devices?.getDevices()?.map(device => {
          const uk = uuidv4()          
          return (
            <DeviceItem key={uk} device={device}/>
          )
        })}
      </Row>
     )
   }
)

export default DevicesList
