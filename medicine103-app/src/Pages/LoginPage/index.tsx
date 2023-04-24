import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { BgImage, LoginBg, LoginForm } from "./style";
import { authFb } from "../../firebase-config";
import { useAuth } from "../../Contexts/Auth/authContext";
import TextInput from "../../Components/Inputs/TextInput";
import PasswordInput from "../../Components/Inputs/PasswordInput";
import { FB_Auth_Error_TYPES, IFB_Auth_Error, fb_auth_errors_parser } from "../../Helpers/fb_auth_helper";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import FormError from "../../Components/Errors/FormError";
// import { IUser } from "../../Models/user";

const LoginPage: React.FC<{}> = () => {
  const [login, setLogin] = React.useState<string>('');
  const [pass, setPass] = React.useState<string>('');
  const [res_error, setResError] = React.useState<IFB_Auth_Error | null>(null);
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
        auth.signin(userCredential.user, () => {
          let from = location.state?.from?.pathname || "/";
          navigate(from, { replace: true });
        });
      })
      .catch((e) => {
        console.log(e.code);
        console.log(e.message);
        const _error = fb_auth_errors_parser(e.code);
        setResError(_error);
      });
  };

  const onChange = (v: string, f: string) => {
    if (res_error) {
      setResError(null);
    }
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
          error={res_error && res_error.type === FB_Auth_Error_TYPES.email ? res_error.value : ''}
          onChange={v => onChange(v, 'login')}
          wrapStyle={{ marginBottom: '20px' }}
        />
        <PasswordInput
          label="Password"
          value={pass}
          name="password"
          error={res_error && res_error.type === FB_Auth_Error_TYPES.password ? res_error.value : ''}
          onChange={v => onChange(v, 'password')}
          wrapStyle={{ marginBottom: '20px' }}
        />
        <FormError styles={{ marginBottom: '20px' }} value={res_error && res_error.type === FB_Auth_Error_TYPES.unknown ? res_error.value : ''} />
        <PrimaryButton type="submit" label="Login" disabled={!login || !pass} />
      </LoginForm>
    </LoginBg>
  );
};

export default React.memo(LoginPage); 