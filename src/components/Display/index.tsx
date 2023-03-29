import "./styles.css";

type DisplayProps = {
  currentOperand: string;
  previousOperand: string;
  operation: string;
};

export function Display({ currentOperand, previousOperand, operation }: DisplayProps) {
  return (
    <>
      <div className="displayPrevious">
        {previousOperand} {operation}
      </div>
      <div className="display">
        {currentOperand}
      </div>
    </>
  );
}
