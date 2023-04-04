import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { BgImage, LoginBg, LoginForm } from "./style";
import { authFb } from "../../firebase-config";
import { useAuth } from "../../Contexts/Auth/authContext";
import TextInput from "../../Components/Inputs/TextInput";
import PasswordInput from "../../Components/Inputs/PasswordInput";
// import { IUser } from "../../Models/user";

const LoginPage: React.FC<{}> = () => {
  const [login, setLogin] = React.useState<string>('');
  const [pass, setPass] = React.useState<string>('');
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  const onSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let login = formData.get("login") as string;
    let password = formData.get("password") as string;
    if (!login || !password) return;
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

  const onChange = (v: string, f: string) => {
    if (f === 'login') {
      setLogin(v);
      return;
    }
    setPass(v);
  }

  return (
    <LoginBg>
      <BgImage />
      <LoginForm onSubmit={onSignIn} autoComplete="new-password">
        <TextInput
          label="Login"
          value={login}
          name="login"
          type="email"
          // error={login}
          onChange={v => onChange(v, 'login')}
          wrapStyle={{ marginBottom: '20px' }}
        />
        <PasswordInput
          label="Password"
          value={pass}
          name="password"
          // error={login}
          onChange={v => onChange(v, 'password')}
          wrapStyle={{ marginBottom: '20px' }}
        />
        <button type="submit">Login</button>
      </LoginForm>
    </LoginBg>
  );
};

export default React.memo(LoginPage); 