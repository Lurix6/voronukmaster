import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import Footer from '../../components/footer';

const Skuseny = (props) => {
  return (
    <div className="individual-page">
      <div className="img-wrapper">
        <div style={{
          }}>
        </div>
      </div>
      <div className="page-content">
        <div className="content">
          <h1>Skúsený inštalatér</h1>
          <div className="content-text">
            <p>
              Ako skúsený inštalatér v oblasti merania a regulácie 
              vodoinštalácií a elektro pôsobím na trhu problematiky 
              už vyše 30 rokov.
              <strong> Množstvom vyriešených problémov dávam zábezpeku,
                že Váš problém bude vyriešený k Vašej spokojnosti.
              </strong>
            </p>
            <p>
              V prípade havarijného stavu nás neváhajte kontaktovať kedykoľvek:
              <strong>
                +421 903 439 648
              </strong>
            </p>
          </div>
          <div className="btn">Mám záujem o služby inštalatéra</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Skuseny;