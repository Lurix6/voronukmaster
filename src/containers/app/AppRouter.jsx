import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import StorePage from '../store/';
import Model from '../model/';
import User from '../../containers/user/'
import Dashbord from '../dashbord/'

const routes = [
  {
    path: '',
    exact: true,
    component: Dashbord 
  },
  {
    path: 'store/categories',
    exact: true,
    component: <div>dfhjkdfhkj</div>  
  },
  {
    path: 'user/:id',
    exact: true,
    component: User,
  },
  {
    path: 'prepareModel',
    exact: true,
    component: () => <div> Підготувати модель </div> 
  },
  {
    exact: true,
    path: 'sell',
    component: () => <div>Продати модуль</div> 
  },
  {
    path: 'model/:id',
    component: Model
  }
];

export default function AppRouter(props) {
  const { url, style, claims } = props;

  return (
    <div className="scrollBox" >
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
              render={ props => <Component { ...props } /> }
            />
            )
          })
        }
      </Switch>
    </div>
  )
}