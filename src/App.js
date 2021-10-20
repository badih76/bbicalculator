import React from "react";
import { connect } from "react-redux";
import "./App.css";
import CalcButton from "./components/button";
import "./css/layouts.css";
import SciButtons from "./components/sci-buttons";
import BasicButtons from "./components/basic-buttons";
import HistoryDisplay from "./components/history-display";

const mapStateToProps = (state) => {
  return { output: state.output };
};

class _App extends React.Component {
  
  displayOutput = (output) => {
    if (!output) return;
    if (output.length > 7) {
      return Number.parseFloat(output).toExponential(2);
    } else {
      return output;
    }
  };

  render() {
    return (
      <div className="container">
        <div className="calc-display col-lg-12">
          {this.displayOutput(this.props.output)}
        </div>
        <HistoryDisplay />
        <div className="calculator col-lg-12">
          <SciButtons />
          <BasicButtons />
        </div>
      </div>
    );
  }
}

const App = connect(mapStateToProps)(_App);
export default App;
