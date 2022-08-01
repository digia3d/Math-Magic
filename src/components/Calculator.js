import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-cont">
        <div className="result">0</div>
        <div className="button">
          <button className="btn-opr" type="button">AC</button>
          <button className="btn-opr" type="button">+/-</button>
          <button className="btn-opr" type="button">%</button>
          <button className="btn-opr-right" type="button">÷</button>
        </div>
        <div className="button">
          <button className="btn-opr" type="button">7</button>
          <button className="btn-opr" type="button">8</button>
          <button className="btn-opr" type="button">9</button>
          <button className="btn-opr-right" type="button">x</button>
        </div>
        <div className="button">
          <button className="btn-opr" type="button">4</button>
          <button className="btn-opr" type="button">5</button>
          <button className="btn-opr" type="button">6</button>
          <button className="btn-opr-right" type="button">-</button>
        </div>
        <div className="button">
          <button className="btn-opr" type="button">1</button>
          <button className="btn-opr" type="button">2</button>
          <button className="btn-opr" type="button">3</button>
          <button className="btn-opr-right" type="button">+</button>
        </div>
        <div className="button">
          <button className="btn-opr-zero" type="button">0</button>
          <button className="btn-opr" type="button">.</button>
          <button className="btn-opr-right" type="button">=</button>
        </div>

      </div>
    );
  }
}

export default Calculator;
