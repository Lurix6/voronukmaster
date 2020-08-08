import React from "react";
import './style.scss';

export default function Cart({mainContent, imgSrc, footerLeft, footerRight, children}) { 
  return (
    <div className="cart">
      <div className="cart__main">
        <img src={imgSrc} />
      </div>
      <div className="cart__footer">
        <div className="cart__footer__left">
          {footerLeft}
        </div>
        <div className="cart__footer__right">
          {footerRight}
        </div>
      </div>
    </div>
  )
}