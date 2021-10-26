import { SignInIcon } from "../../../assets/svg/icons";
import { NavLink, Span } from "../../../styles/globalStyledComponents";

const SignIn = () => {
  return (
    <NavLink mr="40px" color="white" href="/sign-in">
      <SignInIcon color="white" />
      <Span color="white" borderBottom="2px dashed white">
        Вход
      </Span>
    </NavLink>
  );
};

export default SignIn;
