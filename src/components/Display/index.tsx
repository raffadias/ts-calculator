import "./styles.css";

type DisplayProps = {
  value: string;
};

export function Display({ value }: DisplayProps) {
  return <div className="display">{value}</div>;
}
