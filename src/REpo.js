import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { vList, AutoSizer } from "react-virtualized";



function Reposlist(props) {
  return (
    <Themecontext.Consumer>
      {datas => (
        <p> {datas.name} </p>
               )}
    </Themecontext.Consumer>
  );
}

export default Reposlist;

