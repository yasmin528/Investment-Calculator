import { useState } from "react";
import Header from './components/Header';
import InvestmentForm from './components/InvestmentForm';
import Result from './components/Result';

const LABELS = {
  initialInvestment: "INITIAL INVESTMENT",
  annualInvestment: "ANNUAL INVESTMENT",
  expectedReturn: "EXPECTED RETURN",
  duration: "DURATION"
};
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });
  const inputIsValid = userInput.duration >= 1 ;

  function handleChange(label, value) {
    const key = Object.keys(LABELS).find(
      (key) => LABELS[key] === label
    );
    setUserInput((prevInput) => ({
      ...prevInput,
      [key]: +value
    }));
  }
  return (
    <main>
      <Header />
      <InvestmentForm onChange={handleChange} labels={LABELS} initialInput={userInput} />
      {inputIsValid ? <Result userInput={userInput} /> : <p className="center"> Please enter a duration greater than zero.</p>}
    </main>
  )
}

export default App
