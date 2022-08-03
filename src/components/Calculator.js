import React from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    const hendleClick = (e) => {
      const newState = calculate(this.state, e.target.innerText);
      this.setState(newState);
    };
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-cont">
        <div className="results">
          <p className="result">{`${total || ''}${operation || ''}${next || ''}` }</p>
        </div>
        <div className="button">
          <button className="btn-opr" type="button" onClick={hendleClick}><span>AC</span></button>
          <button className="btn-opr" type="button" onClick={hendleClick}><span>+/-</span></button>
          <button className="btn-opr" type="button" onClick={hendleClick}><span>%</span></button>
          <button className="btn-opr-right" type="button" onClick={hendleClick}><span>÷</span></button>
        </div>
        <div className="button">
          <button className="btn-opr" type="button" onClick={hendleClick}><span>7</span></button>
          <button className="btn-opr" type="button" onClick={hendleClick}><span>8</span></button>
          <button className="btn-opr" type="button" onClick={hendleClick}><span>9</span></button>
          <button className="btn-opr-right" type="button" onClick={hendleClick}><span>x</span></button>
        </div>
        <div className="button">
          <button className="btn-opr" type="button" onClick={hendleClick}><span>4</span></button>
          <button className="btn-opr" type="button" onClick={hendleClick}><span>5</span></button>
          <button className="btn-opr" type="button" onClick={hendleClick}><span>6</span></button>
          <button className="btn-opr-right" type="button" onClick={hendleClick}><span>-</span></button>
        </div>
        <div className="button">
          <button className="btn-opr" type="button" onClick={hendleClick}><span>1</span></button>
          <button className="btn-opr" type="button" onClick={hendleClick}><span>2</span></button>
          <button className="btn-opr" type="button" onClick={hendleClick}><span>3</span></button>
          <button className="btn-opr-right" type="button" onClick={hendleClick}><span>+</span></button>
        </div>
        <div className="button">
          <button className="btn-opr-zero" type="button" onClick={hendleClick}><span>0</span></button>
          <button className="btn-opr" type="button" onClick={hendleClick}><span>.</span></button>
          <button className="btn-opr-right" type="button" onClick={hendleClick}><span>=</span></button>
        </div>

      </div>
    );
  }
}

export default Calculator;
