type OperandsProps = {
  currentOperand: string;
  previousOperand: string;
  operation: string;
  overwrite: boolean;
}


export const Actions =  {
  addDigit: "addDigit",
  chooseOperation: "chooseOperation",
  clear: "clear",
  evaluate: "evaluate"
};

function operandExists(operand: string) {
  return operand === null || operand === undefined;
}

export function calculatorReducer(state: any, {type, payload}: any) {
  switch (type) {
  case Actions.clear:
    return {};

  case Actions.addDigit:
    if (state.overwrite) {
      return {
        ...state,
        currentOperand: payload.digit,
        overwrite: false
      };
    }

    if (payload.digit === "0" && state.currentOperand === "0") {
      return state;
    }

    if (payload.digit === "." && state.currentOperand.includes(".")) {
      return state;
    }

    return {
      ...state, currentOperand: `${state.currentOperand || ""}${payload.digit}`
    };

  case Actions.chooseOperation:
    if (operandExists(state.currentOperand) && operandExists(state.previousOperand)) {
      return state;
    }

    if (operandExists(state.currentOperand)) {
      return {
        ...state,
        operation: payload.operation
      };
    }

    if (operandExists(state.previousOperand)) {
      return {
        ...state,
        operation: payload.operation,
        previousOperand: state.currentOperand,
        currentOperand: null
      };
    }

    return {
      ...state,
      previousOperand: evaluate(state),
      operation: payload.operation,
      currentOperand: null
    };

  case Actions.evaluate:
    if (
      operandExists(state.operation) ||
      operandExists(state.currentOperand) ||
      operandExists(state.previousOperand)
    ) {
      return state;
    }

    return {
      ...state,
      overwrite: true,
      previousOperand: null,
      operation: null,
      currentOperand: evaluate(state),
    };
  }
}

function evaluate({ currentOperand, previousOperand, operation }: OperandsProps) {

  // Converting strings to numbers
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return "";
  let computation = null;

  switch (operation) {
  case "+":
    computation = prev + current;
    break;
  case "-":
    computation = prev - current;
    break;
  case "*":
    computation = prev * current;
    break;
  case "/":
    computation = prev / current;
    break;
  }

  return computation?.toString();
}
