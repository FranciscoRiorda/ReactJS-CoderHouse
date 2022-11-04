import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root/Root";

// import ItemListContainer from "../src/containers/ItemListContainer/ItemListContainer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <h1>404 Not found</h1>,
        children: [
            {
                path: "/",
                // element: <ItemListContainer/>,
            },
            {
                path: "/category/:categoryId",
                element: <h1>Categoria</h1>,
            },
            {
                path: "detail/:id",
                element: <h1>Detalle</h1>,
            },

        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />
}

export default Router;