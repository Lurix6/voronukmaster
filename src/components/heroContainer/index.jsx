import React from 'react';
import './style.scss';
import Field from '../../components/field/';
import Button from '../../components/button/';

function HeroContainer({ title, subTitle }) {

  return (
    <div className="hero">
      <div className="hero-content" >
        <div className="hero-reader" >
          <div className="hero-reader-content" >
            <h1>
              { title }
            </h1>
            <h2>
              { subTitle }
            </h2>
            <div className="hero-reader-search">
              <Field />
              <Button fullWidth >Search</Button>
            </div>
          </div>
        </div>
        <div className="hero-view">
        <img src="https://p7.hiclipart.com/preview/382/561/145/kyoto-stl-3d-printing-computer-numerical-control-middle-ages-others-thumbnail.jpg" />
        </div>
      </div>
    </div>
  )
}

export default HeroContainer;