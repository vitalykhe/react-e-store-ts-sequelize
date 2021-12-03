import React, { FC, useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { observer } from "mobx-react-lite";
import { Context } from "..";

interface Props {
  editable: boolean;
}

/**
 * @author
 * @function TypesBar
 **/

const TypesBar: FC<Props> = observer((props) => {
  const { devices } = useContext(Context);

  


    return (
      <ListGroup as="ul">
        {devices?.getTypes()?.map((type) => {
          const uniqueKey = uuidv4();
          return (
            <ListGroup.Item
              style={{ cursor: "pointer" }}
              key={uniqueKey}
              onClick={() => devices?.setSelectedType(type.id)}
              active={devices.getSelectedType() === type.id}
            >
              {type.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    )
 
});

export default TypesBar;
