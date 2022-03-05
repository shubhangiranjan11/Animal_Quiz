import React from 'react'
import './App.css';
import First_page from './First_page'
import Sec_page from './Sec_page'
import Third_page from './Third_page'
import Fourth_page from './Fourth_page'
import Fivth_page from './Fivth_page'
import Six_page from './Six_page'
import Wrong_page from './Wrong_page'
// import ReactDOM from "react-dom";
import {  BrowserRouter,Route,Routes } from "react-router-dom";
import Result_page from './Result_page';


function Script() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<First_page />} />
            <Route exact path="/Sec_page" element={<Sec_page />} />
            <Route exact path="/Third_page" element={<Third_page />} />
            <Route exact path="/Fourth_page" element={<Fourth_page />} />
            <Route exact path="/Fivth_page" element={<Fivth_page />} />
            <Route exact path="/Six_page" element={<Six_page />} />
            <Route exact path="/Wrong_page" element={<Wrong_page />} />
            <Route exact path="/Result_page" element={<Result_page />} />
        </Routes>
        </BrowserRouter>
      </>
    );
  }

export default Script;





