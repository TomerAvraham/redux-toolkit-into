import "./App.css";
import React, { useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deposit10, withdraw5, depositByAmount } from "./slices/bankSlice";

function App() {
  const bank = useSelector((store) => store.bank);
  const dispatch = useDispatch();

  const handleDeposit10 = useCallback(() => {
    dispatch(deposit10());
  }, [dispatch]);

  const inputRef = useRef();

  const onClickAddAmount = () => {
    dispatch(depositByAmount(inputRef.current.value));
  };

  return (
    <div className="App">
      <h1>{bank.money}$</h1>
      <button onClick={handleDeposit10}>Deposit 10</button>
      <button onClick={() => dispatch(withdraw5())}>Withdraw 5</button>
      <br />
      <input ref={inputRef} type="number" />
      <button onClick={onClickAddAmount}>Add amount</button>
    </div>
  );
}

export default App;
