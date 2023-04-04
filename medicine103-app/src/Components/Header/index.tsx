import React from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../Contexts/Auth/authContext";
import { LinkNav, LinksWrapper, Wrapper } from "./style";
import { signOut } from "firebase/auth";
import { authFb } from "../../firebase-config";
interface Props { }

const Header: React.FC<Props> = (props: Props) => {

  const auth = useAuth();
  const navigate = useNavigate();
  
  
  const handleLogOut = () => {
    signOut(authFb).then(() => {
      auth.signout(() => auth.signout(() => navigate("/login")));
    }).catch((error) => {
      console.log(error);
    });
    
  }

  return (
    <Wrapper>
      <LinksWrapper>
        <LinkNav to="/">Home Page</LinkNav>
        <LinkNav to="/teem">Teem Page</LinkNav>
      </LinksWrapper>
      <button onClick={handleLogOut}>Log out</button>
    </Wrapper>
  );
}

export default Header;