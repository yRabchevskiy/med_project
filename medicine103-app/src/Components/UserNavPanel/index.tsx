import React from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../Contexts/Auth/authContext";
import { ContentWrapper, LinkNav, LinksWrapper, Toggle, User, Wrapper } from "./style";
import { signOut } from "firebase/auth";
import { authFb } from "../../firebase-config";
import IconButton from "../Buttons/IconButton";
import { logoutIcon } from "../../Images/icons";
interface Props { }

const UserNavPanel: React.FC<Props> = (props: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const auth = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {

  }, []);

  const handleLogOut = () => {
    signOut(authFb).then(() => {
      auth.signout(() => auth.signout(() => navigate("/login")));
    }).catch((error) => {
      console.log(error);
    });
  };

  const onToggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <ContentWrapper className={open ? 'open' : ''}>
        <User>{auth.currentUser?.email}</User>
        <LinksWrapper>
          <LinkNav to="/">Home</LinkNav>
          <LinkNav to="/medicine">Medicine</LinkNav>
        </LinksWrapper>
        <IconButton styles={{ border: "none", margin: '0 auto' }} onClick={handleLogOut}>{logoutIcon}</IconButton>
        <Toggle onClick={onToggleOpen} />
      </ContentWrapper>
    </Wrapper>
  );
}

export default React.memo(UserNavPanel);