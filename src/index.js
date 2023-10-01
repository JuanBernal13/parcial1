import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Detalle from './Components/Detalle/detalle';
import cafe from './Components/Detalle/cafe';
import Banner from './Components/Detalle/banner';
import Footer from './Components/Detalle/footer';
import Login from './Components/Detalle/login';
import localeEnMessages from "./locales/en.json"; 
import localeEsMessages from "./locales/es.json";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Routes y Route
import { IntlProvider } from 'react-intl';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
const browserLanguage = navigator.language || navigator.userLanguage;
const isSpanish = browserLanguage.startsWith('es');

const messages = isSpanish ? localeEsMessages : localeEnMessages;
const locale = isSpanish ? 'es' : 'en';
ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages}> 
      <Router>
        <Banner />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/detalle" element={<Detalle />} />
        </Routes>
        <Footer />
      </Router>
    </IntlProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorkerRegistration.unregister();
reportWebVitals();
