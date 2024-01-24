// This file is the entry point of the React application.
// It imports the necessary modules and renders the root component of the application.
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
import jaTranslation from './translations/ja.json';
import esTranslation from './translations/es.json';
import ruTranslation from './translations/ru.json';


 // * Configuring i18next.
 // * The 'use' method is used to extend i18next with additional functionality.
 // * The 'init' method is used to initialize i18next.
 // * The 'resources' object contains the translation files for each language.
 // * The 'lng' property sets the initial language.
 // * The 'fallbackLng' property sets the fallback language in case the initial language fails to load.
 // * The 'interpolation' object contains the interpolation options.
 // * The 'escapeValue' property is set to false to allow HTML in translations.

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
            ja: {
                translation: jaTranslation
            },
            es: {
                translation: esTranslation
            },
            ru: {
                translation: ruTranslation
            }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

 // * The 'createRoot' method is used to create a root for the React application.
 // * The 'render' method is used to render the root component of the application.

// 现有的ReactDOM渲染逻辑
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// 现有的性能监测逻辑 Performance monitoring logic
reportWebVitals();
