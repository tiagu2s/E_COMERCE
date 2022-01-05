import { useState } from "react";
import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleChangeDisplayName = (event) => {
    setDisplayName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password and confirm password  must be equal");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });
      setConfirmPassword("");
      setDisplayName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title"> Não tenho conta</h2>
      <span>Regista-te com o teu email e password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChangeDisplayName}
          label="Display Name"
          required
        />
        <FormInput
          type="text"
          name="email"
          value={email}
          onChange={handleChangeEmail}
          label="Email"
          required
        />
        <FormInput
          type="text"
          name="password"
          value={password}
          onChange={handleChangePassword}
          label="Password"
          required
        />
        <FormInput
          type="text"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          label="confirmPassword"
          required
        />
        <CustomButton type="submit"> Registo </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
