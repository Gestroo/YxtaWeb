import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import {Provider} from "react-redux";
import {store} from './redux/store';


function App() {
 return(
   <>
      <Header/>
   </>  
 )
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
  </BrowserRouter>
  </Provider>,
document.getElementById("root")
);


reportWebVitals();
