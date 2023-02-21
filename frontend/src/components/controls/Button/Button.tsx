interface PropsType {
  label: string;
  onClick: () => void;
}

export default function SelectField({ label, onClick }: PropsType) {
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  );
}
