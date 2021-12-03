import React, { FC, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Context } from "../index";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
import { v4 as uuidv4 } from "uuid";

interface IProps { }

/**
 * @author
 * @function @AppRouter
 **/

export const AppRouter: FC<IProps> = (props) => {
  const { user } = useContext(Context);
  return (
    <Switch>
      {user?.getIsAuth &&
        authRoutes.map(({ path, component }) => {
          const uniqueKey = uuidv4();
          return (
            <Route path={path} component={component} exact key={uniqueKey} />
          );
        })}
      {publicRoutes.map(({ path, component }) => {
        const uniqueKey = uuidv4();
        return (
          <Route path={path} component={component} exact key={uniqueKey} />
        );
      })}
      <Redirect to={SHOP_ROUTE} />
    </Switch>
  );
};
