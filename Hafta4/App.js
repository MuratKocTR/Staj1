import React, { Component, isValidElement } from 'react';
import { ReactDOM } from 'react';
import SıraListe from './SıraListe';
import { render } from '@testing-library/react';
import DoktorSayfa from './DoktorSayfa';
import HastaSayfa from './HastaSayfa';
import AnaSayfa from './AnaSayfa';
import {Route, Link} from "react-router-dom";
import NavBar from './NavBar';
import Tablo from './Tablo';

export default class App extends Component{
render(){
  return (
    <div className="App">
    <NavBar />
      <Route exact path="/"component={AnaSayfa} />
      <Route exact path="/secim"component={DoktorSayfa} />
      <Route exact path="/sıra"component={HastaSayfa} />
<Tablo/>
    <DoktorSayfa></DoktorSayfa>
    </div>
  )
}
}
