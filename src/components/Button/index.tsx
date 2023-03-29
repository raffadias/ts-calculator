import "./styles.css";

type ButtonProps = {
  label: string;
  operation?: string;
  double?: string;
  triple?: string;
  click: (label: string) => void;
};

function Button({ label, operation, double, triple, click }: ButtonProps) {
  let classes = "button ";
  classes += operation ? operation : "";
  classes += double ? double : "";
  classes += triple ? triple : "";

  return (
    <button onClick={() => click(label)} className={classes}>
      {label}
    </button>
  );
}

export default Button;
