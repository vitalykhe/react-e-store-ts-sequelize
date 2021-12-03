import  AdminPage from "./pages/AdminPage";
import { Auth } from "./pages/Auth";
import { Basket } from "./pages/Basket";
import { DevicePage } from "./pages/DevicePage";
import { Shop } from "./pages/Shop";
import * as routes from "./utils/consts";

export const authRoutes = [
  {
    path: routes.ADMIN_ROUTE,
    component: AdminPage,
  },
  {
      path: routes.BASKET_ROUTE,
      component: Basket
  }
];

export const publicRoutes = [
    {
        path: routes.SHOP_ROUTE,
        component: Shop
    },
    {
        path: routes.DEVICE_ROUTE,
        component: DevicePage
    },
    {
        path: routes.DEVICE_ROUTE + '/:id',
        component: DevicePage
    },
    {
        path: routes.LOGIN_ROUTE,
        component: Auth
    },
    {
        path: routes.REGISTRATION_ROUTE,
        component: Auth
    },
]
