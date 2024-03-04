import { useState } from "react";
import "./App.css";

function App() {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  const updateEMI = (e) => {
    if (!cost) {
      return;
    }
  };
  const updateDownPayment = () => {};
  const calculateEMI = () => {};

  return (
    <div className="App">
      <span className="title" style={{ fontSize: 30, marginTop: "10px" }}>
        EMI Calculator
      </span>

      <span className="title">Total Cost of Asset</span>
      <input
        type="number"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        placeholder="Total Cost of Assets"
      />

      <span className="title">Interest Rate (in %)</span>
      <input
        type="number"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        placeholder="Interest Rate (in %)"
      />

      <span className="title">Processing Fee (in %)</span>
      <input
        type="number"
        value={fee}
        onChange={(e) => setFee(e.target.value)}
        placeholder="Processing Fee (in %)"
      />

      <span className="title">Down Payment</span>
      <div>
        <input
          type="range"
          min={0}
          max={cost}
          className="slider"
          value={downPayment}
          onChange={updateEMI}
        />

        <div className="lables">
          <label>0%</label>
          <b>{downPayment}</b>
          <label>100%</label>
        </div>
      </div>

      <span className="title">Loan per Month</span>
      <div>
        <input
          type="range"
          min={calculateEMI(cost)}
          max={calculateEMI(0)}
          className="slider"
          value={emi}
          onChange={updateDownPayment}
        />

        <div className="lables">
          <label>{calculateEMI(cost)}</label>
          <b>{downPayment}</b>
          <label>{calculateEMI(0)}</label>
        </div>
      </div>
    </div>
  );
}

export default App;
