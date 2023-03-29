import Button from "../Button";
import { Display } from "../Display";
import "./styles.css";

export function Calculator() {


  return (
    <div className="container">
      <div className="calculator">
        <Display value={"0"} />
        <Button label="AC" click={() => {}} triple="triple" />
        <Button label="/" click={() => {}} operation="operation" />
        <Button label="7" click={() => {}} />
        <Button label="8" click={() => {}} />
        <Button label="9" click={() => {}} />
        <Button label="*" click={() => {}} operation="operation" />
        <Button label="4" click={() => {}} />
        <Button label="5" click={() => {}} />
        <Button label="6" click={() => {}} />
        <Button label="-" click={() => {}} operation="operation" />
        <Button label="1" click={() => {}} />
        <Button label="2" click={() => {}} />
        <Button label="3" click={() => {}} />
        <Button label="+" click={() => {}} operation="operation" />
        <Button label="0" click={() => {}} double="double" />
        <Button label="." click={() => {}} />
        <Button label="=" click={() => {}} operation="operation" />
      </div>
    </div>
  );
}
