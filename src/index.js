import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 导入i18next和react-i18next
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from './translations/en.json';
import zhTranslation from './translations/zh.json';
import deTranslation from './translations/de.json';

// i18next配置
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslation
            },
            zh: {
                translation: zhTranslation
            },
            de: {
                translation: deTranslation
            },
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

// 现有的ReactDOM渲染逻辑
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// 现有的性能监测逻辑
reportWebVitals();
