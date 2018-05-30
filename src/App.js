import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Repo from './Repo.js'
import { List as vList, AutoSizer } from "react-virtualized";


const AppContext = React.createContext()

class App extends Component {


 constructor(props) {
    super(props);

    this.state = {
      datas: [],
    };
  }

 componentDidMount(){
    
      fetch('https://api.github.com/users/shresthi24/repos')
       .then(response => response.json())
        .then(data => this.setState({ datas: data }));
      console.log(this.state.datas)
       
 
     }


  render() {
    return (
      <div>
<AppContext.Provider value={this.state.datas}>
<Reposlist />

    </AppContext.Provider>
   

      </div>
    );
  }
}




function Reposlist(props) {
  return (
    <AppContext.Consumer>
      {datas =>(
        <Repo datas={datas} />
        )
      }
    </AppContext.Consumer>
  );
}     



export default App;

