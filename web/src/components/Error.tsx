import "./Error.css";

interface ErrorProps {
  message?: string;
}

export const Error = (props: ErrorProps) => {
  if (!props.message) {
    return null;
  }
  return <p className="error">{props.message}</p>;
};
