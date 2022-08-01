import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className='calculator-cont'>
        <div className='result'>0</div>
        <div className='button'>
          <button className='btn-opr' type='button'>AC</button>
          <button className='btn-opr' type='button'>+/-</button>
          <button className='btn-opr' type='button'>%</button>
          <button className='btn-opr-right' type='button'>÷</button>
        </div>
      </div>
    )
  }
}