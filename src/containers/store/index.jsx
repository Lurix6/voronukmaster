import React, { Fragment } from 'react';
import HeroContainer from '../../components/heroContainer/';
import Cart from '../../components/cart/';
import CategoriesModels from './categoriesModels/';
import Button from '../../components/button/';
import { Link } from 'react-router-dom';
import './style.scss';

const StorePage = () => {
  const title = 'The way to buy 3D models';
  const subTitle = 'High-quality 3D models for VFX, game development, VR/AR, architecture, and animation.'

  const baguets = [
    {
      imgSrc:"http://art-master3d.com/image/cache/data/Category/Baget/baget-dlya-chpu-072-1079x606.jpg",
      footerLeft:"Багет 1",
      footerRight:"120 $"
    },
    {
      imgSrc:"http://art-master3d.com/image/cache/data/Category/Baget/STL-baget-dlya-chpu-053-1079x606.jpg", 
      footerLeft:"Багет 2",
      footerRight:"120 $",
    },
    {
      imgSrc:"http://art-master3d.com/image/cache/data/Category/Baget/baget-dlya-chpu-020-1079x606.jpg",
      footerLeft:"Багет 3",
      footerRight:"120 $",
    },
    {
      imgSrc:"http://art-master3d.com/image/cache/data/Category/Baget/baget-dlya-chpu-072-1079x606.jpg",
      footerLeft:"Багет 4",
      footerRight:"120 $",
    }
  ]

  const categoriesModels = [
    'Багети',
    'Балясини',
    'Двері',
    'Декор',
    'Декор угловий',
    'Ікони',
  ];

  return (
    <>
      <HeroContainer title={ title } subTitle={ subTitle } />
      { 
        window.innerWidth > 700 ? (
          <div className='store-navbar' >
            <div className="store-navbar__menu">
              <ul>
                <li><span>Багети</span></li>
                <li><span>Балясини</span></li>
                <li><span>Двері</span></li>
                <li><span>Декор</span></li>
                <li><span>Декор угловий</span></li>
                <li><span>Ікони</span></li>
                <li><span>Капітель</span></li>
                <li><span>Кронштейни</span></li>
                <li><span>Мебель</span></li>
                <li><span>Рамки</span></li>
                <li><span>Розетки</span></li>
                <li><span>Фасади</span></li>
              </ul>
            </div>  
          </div>
        ) : (
          <div className="select-navbar__store">

          </div>
        )
      }
      {
        categoriesModels.map(category => 
          <CategoriesModels title={category} > 
            {
              baguets.map( ({ imgSrc, footerLeft, footerRight}) => 
                <Cart  imgSrc={imgSrc} footerLeft={footerLeft} footerRight={footerRight} />
              )
            }
          </CategoriesModels>
        )
      }
      <div className="shoveAll">
        <Button>
          <Link to="/store/categories">
             Показати всі категорії
          </Link>
        </Button>
      </div>
    </>
  )
}

export default StorePage;