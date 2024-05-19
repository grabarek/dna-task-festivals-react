import { ReactNode } from "react";
import { Button, ButtonVariant } from "../../components/Button/Button";
import { Title } from "../../components/Title/Title";

import "./Screen.css";

interface Action {
  label: string;
  callback: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
}

interface ScreenProps {
  title: string;
  content: ReactNode;
  actions: Array<Action>;
}

export const Screen = ({title, content, actions}: ScreenProps) => {
  return (
    <div className="screen">
      <div className="content">
        <Title content={title} />
        {content}
      </div>
      <div className="actions">
        {actions.map((action, index) => {
          return (
            <Button
              label={action.label}
              callback={action.callback}
              variant={action.variant || ButtonVariant.PRIMARY}
              disabled={action.disabled}
            />
          );
        })}
      </div>
    </div>
  );
};
