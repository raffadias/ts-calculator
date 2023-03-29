import Button from "@/components/Button";
import { Display } from "@/components/Display";
import { Actions, calculatorReducer } from "@/_config/reducer";
import { useReducer } from "react";
import "./styles.css";



export function Calculator() {
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(calculatorReducer, {});

  function addDigit(digit: string) {
    dispatch({type: Actions.addDigit, payload: { digit }});
  }

  function chooseOperation(operation: string) {
    dispatch({type: Actions.chooseOperation, payload: { operation }});
  }

  function clearCalc() {
    dispatch({type: Actions.clear});
  }

  function evaluate() {
    dispatch({type: Actions.evaluate});
  }

  return (
    <div className="container">
      <h1 className="title">Calculator</h1>
      <div className="calculator">
        <Display previousOperand={previousOperand} currentOperand={currentOperand} operation={operation}/>
        <Button label="AC" click={clearCalc} triple="triple" />
        <Button label="/" click={chooseOperation} operation="operation" />
        <Button label="7" click={addDigit} />
        <Button label="8" click={addDigit} />
        <Button label="9" click={addDigit} />
        <Button label="*" click={chooseOperation} operation="operation" />
        <Button label="4" click={addDigit} />
        <Button label="5" click={addDigit} />
        <Button label="6" click={addDigit} />
        <Button label="-" click={chooseOperation} operation="operation" />
        <Button label="1" click={addDigit} />
        <Button label="2" click={addDigit} />
        <Button label="3" click={addDigit} />
        <Button label="+" click={chooseOperation} operation="operation" />
        <Button label="0" click={addDigit} double="double" />
        <Button label="." click={addDigit} />
        <Button label="=" click={evaluate} operation="operation" />
      </div>
    </div>
  );
}
