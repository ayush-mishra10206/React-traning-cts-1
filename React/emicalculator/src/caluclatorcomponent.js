import { useState } from "react";
import './calculatorcomponent.css';

function CalculatorComponent() {

  const [calculator, setLoanData] = useState({
    loanAmount: 25000,
    tenure: 12,
    interestRate: 10.7,
    emiAmount: 2207,
    interestPayable: 1480
  })

  function onChangeInputValue(event) {
    // console.log(event.target.name, event.target.value)
    setLoanData({
      ...calculator, [event.target.name]: event.target.value,
      interestPayable: calculateInterest(),
    })

  }
  function calculateInterest() {
    let monthlyInterest = 0;
    monthlyInterest = (parseInt(calculator.loanAmount) * ((parseInt(calculator.interestRate) * 0.01)) / parseInt(calculator.tenure));
    setLoanData({ ...calculator, emiAmount: calculateEmiAmount(monthlyInterest) })
    return monthlyInterest;
  }

  function calculateEmiAmount(interest) {
    return (parseInt(calculator.loanAmount) / parseInt(calculator.tenure) + interest);
  }

  return (
    <div>
      <div className="outerContainer">
        <p className="topHeader" >EMI CALCULATOR</p>
        <p> Loan ammount : {calculator.loanAmount} </p>
        <input type="range" name="loanAmount" value={calculator.loanAmount}
          min="25000" max="5000000" onChange={onChangeInputValue} />
        <p>Tenure :  {calculator.tenure}</p>
        <input type="range" name="tenure" value={calculator.tenure}
          min="12" max="84" onChange={onChangeInputValue} />
        <p>  Interest Rate :  {calculator.interestRate}</p>
        <input type="range" name="interestRate" value={calculator.interestRate}
          min="10.7" max="19.5" onChange={onChangeInputValue} />
        <div>
          <p className="resultLabel"> Emi ammount : {calculator.emiAmount} </p>
          <p className="resultLabel"> Interest payable : {calculator.interestPayable}</p>
        </div>
      </div>
    </div>
  );
}

export default CalculatorComponent;