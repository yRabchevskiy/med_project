import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LoginBg, LoginForm } from "./style";
import { authFb } from "../../firebase-config";
import { useAuth } from "../../Contexts/Auth/authContext";
// import { IUser } from "../../Models/user";

const LoginPage: React.FC<{}> = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  const onSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let login = formData.get("login") as string;
    let password = formData.get("password") as string;
    if (!login || !password) return;
    debugger
    signInWithEmailAndPassword(authFb, login, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
        auth.signin(userCredential.user as any, () => {
          let from = location.state?.from?.pathname || "/";
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  return (
    <LoginBg>
      <LoginForm onSubmit={onSignIn} autoComplete="new-password">
        <div>
          <label>Login</label>
          <input autoComplete="new-password" name="login" type="text" />
        </div>
        <div>
          <label>Password</label>
          <input autoComplete="new-password" name="password" type="password" />
        </div>
        <button type="submit">Login</button>
      </LoginForm>

    </LoginBg>
  );
};

export default React.memo(LoginPage); 