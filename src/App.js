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
      Selected_Row: "Koksijde",
      lon: 2.6500795,
      lat: 51.1053908
    };
    this.selectname = this.selectname.bind(this);
  }
  selectname(name) {
    const found = this.state.list.filter(item => item.Name === name);
    this.setState({lon: found[0].Lon});
    this.setState({lat: found[0].Lat});
    console.log(found);
  }
 
  render(){
    return (
      <div>
        <Locator lon={this.state.lon} lat={this.state.lat}/>
        <CityList Cities={this.state.list} selectnaam={this.selectname} />
      </div>
    );
  }
}

export default App;
