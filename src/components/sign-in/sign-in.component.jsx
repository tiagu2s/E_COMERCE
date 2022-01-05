import { useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in">
      <h2>Ja Tenho Conta</h2>
      <span>Entra com o teu email e password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={email}
          handleChange={handleChangeEmail}
          required
          label="Email"
        />
        <FormInput
          name="password"
          value={password}
          handleChange={handleChangePassword}
          required
          label="Password"
        />

        <div className="buttons">
          <CustomButton type="submit">Submeter</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
