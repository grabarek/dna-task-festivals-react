import { useMemo, useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import { logout, setUser, useStoreDispatch, useStoreSelector, navigate } from "../store";
import { onboard } from "../api";
import { Error } from "../components/Error/Error";
import { Screen } from "../components/Screen/Screen";
import { ButtonVariant } from "../components/Button/Button";

export const OnboardingPage = () => {
  const user = useStoreSelector((store) => store.user.data);

  const [name, setName] = useState('');
  const [pin, setPin] = useState(['', '', '', '']);
  const [error, setError] = useState<string>();
  const dispatch = useStoreDispatch();

  const inputs = useRef<HTMLInputElement[]>([]);

  const actions = useMemo(
    () => [
      {
        label: "finish",
        callback: async () => {
          if (!user) {
            return;
          }
          try {
            const newUser = await onboard(user.id);
            dispatch(setUser(newUser));
            dispatch(navigate("/home"));
          } catch (e) {
            setError(String(e));
          }
        },
        disabled: !name || pin.some((p) => p === '')
      },
      { 
        label: "logout",
        callback: () => dispatch(logout()),
        variant: ButtonVariant.SECONDARY
      },
    ],
    [name, pin],
  );

  const handlePinChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    // Ensure only digits are entered
    if (/^\d*$/.test(value)) {
      const newPin = [...pin];
      // Limit the input to 1 character
      newPin[index] = value.slice(0, 1);
      setPin(newPin);
      // Move focus to the next input field if available
      if (index < 3 && value !== '') {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handlePinKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    // Move focus to the previous input field if backspace is pressed and the input field is empty
    if (e.key === 'Backspace' && pin[index] === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <Screen
      title="Onboarding"
      content={
        <>
          <p>Please fill remaining data in order to activate your account</p>
          <form className="form">
            <label htmlFor="email">Full name: </label>
            <input
              name="fullName"
              type="text"
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="pin">PIN number:</label>
            <div className="pin">
              {pin.map((pin, index) => (
                 <input
                 key={index}
                 type="text"
                 value={pin}
                 onChange={(e) => handlePinChange(e, index)}
                 onKeyDown={(e) => handlePinKeyDown(e, index)}
                 maxLength={1}
                 ref={(el) => (inputs.current[index] = el as HTMLInputElement)}
               />
              ))}
            </div>
          </form>
          <Error message={error} />
        </>
      }
      actions={actions}
    />
  );
};
