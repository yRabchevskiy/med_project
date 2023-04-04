import React from "react";
import { AppAuthProvider } from "./auth";
import { IUser } from "../../Models/user";


interface AuthContextType {
  user: IUser | null;
  signin: (data: IUser, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

const getUserFromLocalStorage = (): IUser | null => {
  const _u = localStorage.getItem('MED_USER');
  if (!_u) return null;
  return JSON.parse(_u);
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<IUser | null>(getUserFromLocalStorage());

  let signin = (data: IUser, callback: VoidFunction) => {
    if (!data) return;
    if (data) {
      localStorage.setItem('MED_USER', JSON.stringify(data));
    }
    return AppAuthProvider.signin(() => {
      setUser(data);
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    localStorage.removeItem('MED_USER');
    return AppAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}
