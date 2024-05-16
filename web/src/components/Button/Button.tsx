import "./Button.css";

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  EXTRA = "extra",
}

interface ButtonProps {
  label: string;
  callback: () => void;
  variant?: ButtonVariant;
}

export const Button = ({
  label, 
  callback,
  variant = ButtonVariant.PRIMARY,
}: ButtonProps) => {
  return (
    <button
      key={label}
      onClick={callback}
      className={`button button--${variant}`}
    >
      {label.toUpperCase()}
    </button>
  );
};
