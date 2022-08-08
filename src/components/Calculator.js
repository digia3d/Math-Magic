import { useState } from 'react';
import './Calculator.css';
import calculate from './logic/calculate';
import Header from './Header';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const hendleClick = (e) => {
    setState({ ...state, ...calculate(state, e.target.firstChild.textContent) });
  };

  return (
    <>
      <Header />
      <h2>Let us do some Maths!</h2>
      <div className="calculator-cont">
        <div className="results">
          <p className="result">
            {state.total}
            {state.operation}
            {state.next}
          </p>
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
    </>
  );
};

export default Calculator;
