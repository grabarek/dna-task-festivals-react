import { ReactNode } from "react";
import "./Screen.css";

interface Action {
  label: string;
  callback: () => void;
}

interface ScreenProps {
  title: string;
  content: ReactNode;
  actions: Array<Action>;
}

export const Screen = (props: ScreenProps) => {
  return (
    <div className="container">
      <div>
        <h1>{props.title}</h1>
        {props.content}
      </div>
      <div className="actions">
        {props.actions.map((action) => {
          return (
            <button
              key={action.label}
              onClick={action.callback}
              className="action"
            >
              {action.label.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
};
