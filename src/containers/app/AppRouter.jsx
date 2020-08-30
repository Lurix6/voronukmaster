import React from 'react';
import Dashbord from '../dashbord/'

export default function AppRouter(props) {

  return (
    <div className="scrollBox" >
      <Dashbord {...props} />
    </div>
  )
}