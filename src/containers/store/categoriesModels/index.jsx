import React, { Fragment } from 'react';
import Cart from '../../../components/cart'
import './style.scss'

const StorePage = ({title, content, children}) => (
  <div className="categories-models">
    <div className="categories-item">
      <div className="categories-item__header" >
        { title }
      </div>
      <div className="categories-item__content" >
        { children || content }
      </div>
    </div>
  </div>
)

export default StorePage;