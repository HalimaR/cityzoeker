import React from "react";
import "./App.css";

class CityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Citie: this.props.Cities
    };
  }
  selectname = naam => {
    this.props.selectnaam(naam);
  };

  render() {
    const cityComponents = this.state.Citie.map(item => (
      <li key={item.Name} onClick={() => this.selectname(item.Name)}>{item.Name}</li>
    ));
    return (
      <div>
        <h3>lijst</h3>
        <div className="myBox">
          <ul>{cityComponents}</ul>
        </div>
      </div>
    );
  }
}
export default CityList;