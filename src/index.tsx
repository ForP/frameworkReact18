import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import "./index.less";

console.log('入口文件')
try {
    const rootElement = document.getElementById('root');
    const root = createRoot(rootElement!); // TypeScript 使用 createRoot(container!)
    root.render(<App />);
} catch (e) {
    console.log('e', e);
}