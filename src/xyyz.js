import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { List,Image } from "semantic-ui-react"
import {  Link } from "react-router-dom";


class Repo extends Component {

 constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <div>
       {this.props.datas.map(data=>
       	<div>
        <List.Item>
                      <List.Content>
                      <List.Header>

	<Link to=''> {data.name} </Link>   <p> </p>
	</List.Header>
	 </List.Content>
                 </List.Item> 
   </div>

)}
      </div>
    );
  }
}



export default Repo;

