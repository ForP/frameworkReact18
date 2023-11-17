import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "@/pages/Layout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Page404 from "@/pages/404";

function AppRouter() {
    const pages = useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "/login",
                    element: <Login />,
                },
            ],
        },
        {
            path: "*",
            element: <Page404 />,
        },
    ]);
    return pages;
}

export default AppRouter