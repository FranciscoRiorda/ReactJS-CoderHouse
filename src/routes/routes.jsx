import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root/Root";

import ItemListContainer from "../containers/ItemListContainer/ItemListContainer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <h1>404 Not found</h1>,
        children: [
            {
                path: "/home",
                element: <h1>home</h1>,
            },
            {
                path: "/cartelera",
                element: <ItemListContainer/>,
            },
            {
                path: "/artistas",
                element: <h1>Artistas</h1>,
            },
            {
                path: "/salones",
                element: <h1>Salones</h1>,
            },
            {
                path: "/contacto",
                element: <h1>Contacto</h1>,
            },
            {
                path: "detail/:detailId",
                element: <ItemListContainer/>,
            },

        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />
}

export default Router;