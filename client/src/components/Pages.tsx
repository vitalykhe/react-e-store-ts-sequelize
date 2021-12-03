import React, { FC, useContext } from 'react'
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Pagination } from 'react-bootstrap'

interface Props {}

/**
* @author VitalyKhe

* @function Pages
**/

const Pages:FC<Props> = observer((props) => {
  const { devices } = useContext(Context)

  const pages = 5
  let items = []
  let active = 1

  const changePage = (number: number): void => {
    if(devices) devices.setPage(number)
  }

  for (let number = 1; number <= pages; number++) {
    items.push( 
      <Pagination.Item key={number} active={number === active} onClick={() => changePage(number)}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <Pagination className="mt-4">{items}</Pagination>
   )  
 })

export default Pages
