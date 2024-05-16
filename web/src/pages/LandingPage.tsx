import { navigate, useStoreDispatch } from "../store";
import { Screen } from "../components/Screen/Screen";
import { Image } from "../components/Image/Image";
import IllustrationFile from '../assets/images/blob-3d.png'; 
import { ButtonVariant } from "../components/Button/Button";

export const LandingPage = () => {
  const dispatch = useStoreDispatch();

  const actions = [
    { 
      label: "login", 
      callback: () => dispatch(navigate("/login"))
     },
    {
      label: "register",
      callback: () => dispatch(navigate("/register")),
      variant: ButtonVariant.SECONDARY
    },
  ];

  const content = <>
    <p>Create your account or login to start using the app right now!</p>
    <Image src={IllustrationFile} alt="Festival App" />
  </>

  return (
    <Screen
      title="Fantastic Festivals"
      content={content}
      actions={actions}
    />
  );
};
