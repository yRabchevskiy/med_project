import React from "react";
import { AppAuthProvider } from "./auth";
import { User } from "firebase/auth";
import { ICurrentUser } from "../../Models/user";


interface AuthContextType {
  token: string | null;
  currentUser: ICurrentUser | null;
  signin: (user: User, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
  // onSetCurrentUser: (_user: IUser | null) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

const getUserFromLocalStorage = (): ICurrentUser | null => {
  const _u = localStorage.getItem('MED_USER');
  if (!_u) return null;
  return JSON.parse(_u);
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [token, setToken] = React.useState<string | null>(null);
  let [currentUser, setCurrentUser] = React.useState<ICurrentUser | null>(getUserFromLocalStorage());

  let signin = (user: User, callback: VoidFunction) => {
    if (!user) return;
    if (user) {
      localStorage.setItem('MED_USER', JSON.stringify({ email: user.email, uid: user.uid }));
    }
    return AppAuthProvider.signin(() => {
      setToken(user.refreshToken);
      setCurrentUser({ email: user.email, uid: user.uid });
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    localStorage.removeItem('MED_USER');
    return AppAuthProvider.signout(() => {
      setToken(null);
      callback();
    });
  };

  let value = { token, currentUser, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}
