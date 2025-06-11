import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@/pages/AppRouter';

export default function App() {
    return (
        <BrowserRouter basename="/">
            <Suspense fallback={null}>
                <AppRouter></AppRouter>
            </Suspense>
        </BrowserRouter>
    );
}
