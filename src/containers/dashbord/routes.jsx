import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DefaultRoute from './routes/defaultRout';
import Ustanovka from './routes/ustanovkaSnatehniki'
import Zamena from './routes/zamena'
import Razvodka from './routes/razvodka'
import Svarochno from './routes/svarochnoSant'
import Potechka from './routes/potechki'
import Photo from './routes/workPhotos'
import VseOtveti from './routes/vseOtzevi'

const routes = [
  {
    path: '',
    exact: true,
    component: DefaultRoute 
  },
  {
    path: 'inštalatérske-práce',
    exact: true,
    component: Ustanovka 
  },
  {
    path: 'výmena-sanity',
    exact: true,
    component: Zamena 
  },
  {
    exact: true,
    path: 'montáž-potrubia',
    component: Razvodka 
  },

  {
    exact: true,
    path: 'eliminácia-netesností-potrubia',
    component: Potechka
  },
  {
    exact: true,
    path: 'fotografie-našich-prác',
    component: Photo
  },
  {
    exact: true,
    path: 'zanechať-recenziu',
    component: VseOtveti
  }
];

export default function AppRouter(props) {
  return (
    <Switch>
      {
        routes.map(singleRoute => {
          const { path, exact, component: Component, ...otherProps } = singleRoute;
          return (
            <Route
              {...otherProps}
              exact={exact}
              key={singleRoute.path}
              path={ `/${path}` }
              render={ () => <Component { ...props } /> }
          />
          )
        })
      }
    </Switch>
  )
}