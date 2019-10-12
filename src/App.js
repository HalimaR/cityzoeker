import React from 'react';
import './App.css';
import Locator from './Locator';
import CityList from './CityList';
import gemeenteList from "./GemeenteList";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      list: gemeenteList,
      Selected_Row: "Koksijde"
    };
    this.selectname = this.selectname.bind(this);
  }
  selectname(name) {
    const found = this.state.list.filter(item => item.Name === name);
    console.log(found);
    console.log("test "+ name);
    return [found[0].Lat, found[0].Lon];
  }
 
  render(){
    return (
      <div>
        <Locator getcordinate={this.selectname(this.state.Selected_Row)} />
        <CityList Cities={this.state.list} selectnaam={this.selectname} />
      </div>
    );
  }
}

export default App;
