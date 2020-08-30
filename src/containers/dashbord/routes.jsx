import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DefaultRoute from './routes/defaultRout';
import Ustanovka from './routes/ustanovkaSnatehniki'
import Zamena from './routes/zamena'
import Razvodka from './routes/razvodka'
import Svarochno from './routes/svarochnoSant'
import Potechka from './routes/potechki'

const routes = [
  {
    path: '',
    exact: true,
    component: DefaultRoute 
  },
  {
    path: 'ustanovka-santehniki',
    exact: true,
    component: Ustanovka 
  },
  {
    path: 'zamena-santehniki',
    exact: true,
    component: Zamena 
  },
  {
    exact: true,
    path: 'razvodka-trub',
    component: Razvodka 
  },
  {
    exact: true,
    path: 'svarochno-santehnicheskie-raboty',
    component: Svarochno
  },
  {
    exact: true,
    path: 'ustranenie-protechek',
    component: Potechka
  },
  {
    exact: true,
    path: 'photo',
    component: () => <div>photo</div> 
  },
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