import React from "react";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "@/pages/AppRouter";

export default function App() {
    return (
        <BrowserRouter basename="/mobile-dashboard">
            <AppRouter></AppRouter>
        </BrowserRouter>
    )
}