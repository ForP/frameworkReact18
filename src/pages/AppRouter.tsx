import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
const Layout = lazy(() => import(/* webpackChunkName: "p_Layout" */ '@/pages/Layout'));
const Home = lazy(() => import(/* webpackChunkName: "p_Home" */ '@/pages/Home'));
const Login = lazy(() => import(/* webpackChunkName: "p_Login" */ '@/pages/Login'));
const Page404 = lazy(() => import(/* webpackChunkName: "p_Page404" */ '@/pages/404'));

function AppRouter() {
    const pages = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: '/login',
                    element: <Login />,
                },
            ],
        },
        {
            path: '*',
            element: <Page404 />,
        },
    ]);
    return pages;
}

export default AppRouter;
