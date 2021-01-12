import './App.css';
import React from 'react';

import Button from './Components/Button.js'

class App extends React.Component  {

state = {
currentString : ''
}; 

 updateState = (value) => {
  if (value === 'Clear') {
    this.setState(
      {
        currentString : ''
      }
    )
  }

   else if (value === '=') {
     this.calculate();
   }
   else {
      let currentState = this.state.currentString;
      currentState += value;

      this.setState( {
        currentString : currentState
        }
      )
   }
  
}

calculate = () => {

  let answer = '';

    try {
      answer = eval(this.state.currentString);
        }
  
    catch(e)
    {
      answer = 'Error'
    }

  this.setState(
    {
      currentString : answer
    }
  )
}

  render() {

    const inputStyle = {
      height : '50px',
      width : '650px',
      color : 'white',
      fontSize : '2vw',
      textAlign : 'center',
      backgroundColor : '#003366'
    }

    this.updateState = this.updateState.bind(this)

    return (
      <div className="Style">

        <h1 className = "row" >Enter Calculation</h1>

        <div className = "row">
        <input style = {inputStyle} value={this.state.currentString} readOnly/>
        </div>

        <div className = "row">
        <Button handler = {this.updateState} character = {7} ></Button>
        <Button handler = {this.updateState}  character = {8} ></Button>
        <Button  handler = {this.updateState} character = {9} ></Button>
        <Button  handler = {this.updateState}  character = {'+'} ></Button>
        </div>
        
        <div className = "row">
        <Button handler = {this.updateState}  character = {4} ></Button>
        <Button handler = {this.updateState}  character = {5} ></Button>
        <Button handler = {this.updateState}  character = {6} ></Button>
        <Button handler = {this.updateState}  character = {'-'} ></Button>
        </div>

        <div className = "row">
        <Button handler = {this.updateState}  character = {1} ></Button>
        <Button handler = {this.updateState} character = {2} ></Button>
        <Button handler = {this.updateState}  character = {3} ></Button>
        <Button handler = {this.updateState}   character = {'*'} ></Button>
        </div>
        
        <div className = "row">
        <Button handler = {this.updateState}  character = {0} ></Button>
        <Button handler = {this.updateState}  character = {'.'} ></Button>
        <Button handler = {this.updateState}  character = {'='}></Button>
        <Button handler = {this.updateState}  character = {'/'}></Button>
        </div>

        <div className = "row">
        <Button handler = {this.updateState}  character = {'Clear'}></Button>
        </div>

      </div>
    );
  }
 
}

export default App;