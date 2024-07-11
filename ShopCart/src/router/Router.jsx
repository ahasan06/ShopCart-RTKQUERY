import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../rootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Cart from './../Pages/Cart/Cart';
import AdminProduct from "../Pages/AdminProduct/AdminProduct";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

export const rootRouter = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            { path: "/", element: <Home/>, index: true },
            { path: "/cart", element: <Cart/>},
            { path: "/adminProduct", element: <AdminProduct/>},
            { path: "/product/:prodId", element: <ProductDetails/>},
          
        ]
    }
])