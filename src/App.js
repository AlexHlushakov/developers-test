import React from 'react';
import './App.css';
import logo from './assets/img/Frame.svg';
import Services from "./Desktop/Services";
import {BrowserRouter} from "react-router-dom";
import {HashLink as Link} from "react-router-hash-link";
import MainScreen from "./Desktop/MainScreen";
import Header from "./Desktop/Header";
import DevSteps from "./Desktop/DevSteps";
import Examples from "./Desktop/Examples";
import MoreInfo from "./Desktop/MoreInfo";
import Form from "./Desktop/Form";






function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <header className="header">
                <div className="container">
                    <img src={logo} alt="" className="header_logo"/>
                    <div className="header_block">
                        <nav className="header_nav">
                            <Link className="header_nav_link" to="#services" smooth="true">Услуги</Link>
                            <Link className="header_nav_link" to="#examples" smooth="true">Портфолио</Link>
                            <Link className="header_nav_link" to="#devSteps" smooth="true">Этапы</Link>
                            <Link className="header_nav_link" to="#services" smooth="true">Дизайнеры</Link>
                        </nav>
                        <button className="header_block_button">ЗАКАЗАТЬ</button>
                    </div>
                </div>

            </header>
            {/*<Header/>*/}
            <MainScreen/>
            <Services />
            <DevSteps/>
            <Examples/>
            <MoreInfo/>
            <Form/>
            <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
