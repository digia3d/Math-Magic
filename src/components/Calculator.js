import React from 'react';
import './Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-cont">
        <div className="results">
          <p className="result">0</p>
        </div>
        <div className="button">
          <button className="btn-opr" type="button"><span>AC</span></button>
          <button className="btn-opr" type="button"><span>+/-</span></button>
          <button className="btn-opr" type="button"><span>%</span></button>
          <button className="btn-opr-right" type="button"><span>÷</span></button>
        </div>
        <div className="button">
          <button className="btn-opr" type="button"><span>7</span></button>
          <button className="btn-opr" type="button"><span>8</span></button>
          <button className="btn-opr" type="button"><span>9</span></button>
          <button className="btn-opr-right" type="button"><span>x</span></button>
        </div>
        <div className="button">
          <button className="btn-opr" type="button"><span>4</span></button>
          <button className="btn-opr" type="button"><span>5</span></button>
          <button className="btn-opr" type="button"><span>6</span></button>
          <button className="btn-opr-right" type="button"><span>-</span></button>
        </div>
        <div className="button">
          <button className="btn-opr" type="button"><span>1</span></button>
          <button className="btn-opr" type="button"><span>2</span></button>
          <button className="btn-opr" type="button"><span>3</span></button>
          <button className="btn-opr-right" type="button"><span>+</span></button>
        </div>
        <div className="button">
          <button className="btn-opr-zero" type="button"><span>0</span></button>
          <button className="btn-opr" type="button"><span>.</span></button>
          <button className="btn-opr-right" type="button"><span>=</span></button>
        </div>

      </div>
    );
  }
}

export default Calculator;
