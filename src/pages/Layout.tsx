import React from "react";
import { Outlet, Link } from 'react-router-dom';
import styles from "../index.less";
import empty from "@/assets/images/global/efficiency_bg.webp";

export default function Layout(props: {
    children?: React.ReactNode;
}) {
    console.log("🚀 ~ file: Layout.tsx:4 ~ props:", props)
    return (
        <div className={styles['container']}>
            看看你卡, change 
            <Outlet />
            <Link to="/login">登录页</Link>
            <Link to="/login/second">二级路由</Link>
            <img src={empty} style={{ width: 100, height: 100 }} />
            <div className={styles['assets']}>hhhhh </div>
        </div>
    )
}