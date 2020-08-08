import React from 'react';
import { Drawer } from 'antd';
import Menu from '../menu/'

const DrawerL = (props) => {
  const { placement } = props;

  return  (
    <Drawer style={{padding: 0}} { ...props } closable={true} placement={ placement } closeIcon >
      <Menu />
    </Drawer>
  )
}

DrawerL.defaultProps= {
  placement: 'left',
}
export default  DrawerL;