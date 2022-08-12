import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './bootstrap/dist/css/bootstrap.min.css';
import Roadmap from './road-map';
import  Who from './who-we-are';
import ScrollToTop from "./ScrollToTop";
import PrivacyPolicy from './PrivacyPolicy';
import Terms from './Terms';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="road-map" element={<Roadmap/>}/>
          <Route path="who-we-are" element={<Who/>}/>
          <Route path="Terms" element={<Terms/>}/>
          <Route path="PrivacyPolicy" element={<PrivacyPolicy/>}/>
      </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
