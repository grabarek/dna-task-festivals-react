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
  disabled?: boolean;
}

export const Button = ({
  label, 
  callback,
  variant = ButtonVariant.PRIMARY,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      key={label}
      onClick={callback}
      className={`button button--${variant}`}
      disabled={disabled}
    >
      {label.toUpperCase()}
    </button>
  );
};
