import { lazy } from "react";
import { DETAIL, FAVORITE, HOME,SIGNUP,LOGIN,PAYMENT } from "../config/constant/routePathConstants";
import NotFound from "../components/NotFound";

const HomeLayout = lazy(() => import("../container"))
const ProductList = lazy(() => import("../pages/ProductList"));
const Favorites = lazy(() => import("../pages/WishList"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const Signup = lazy(() => import("../signup/SignupForm"));
const Login = lazy(() => import("../login/LoginForm"));
const Payment = lazy(() => import("../payment/PaymentForm"));




// Routes
const MainRoutes = [
    {
        path: HOME,
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <ProductList />,
            },            {
                path: FAVORITE,
                element: <Favorites />,
            },
            {
                path: SIGNUP,
                element: <Signup />,
            },
            {
                path: PAYMENT,
                element: <Payment />,
            },
            {
                path: LOGIN,
                element: <Login />,
            },
            {
                path: DETAIL,
                element: <ProductDetail />,
            },
            {
                path: "*",
                element: <NotFound/>,
            },
        ],
    },
];
export default MainRoutes


