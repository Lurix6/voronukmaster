import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Skuseny from '../skuseny/'
import Dashbord from '../dashbord/'

const routes = [
  {
    path: '',
    exact: true,
    component: Dashbord 
  },
  {
    path: 'skuseny-instalater',
    exact: true,
    component: Skuseny  
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