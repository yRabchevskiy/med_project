import React from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../Contexts/Auth/authContext";
import { AccountIcon, AccountLabel, ContentWrapper, LinksWrapper, Toggle, AccountWrapper, Wrapper } from "./style";
import { signOut } from "firebase/auth";
import { authFb } from "../../firebase-config";
import IconButton from "../Buttons/IconButton";
import { accountIcon, logoutIcon, medicineIcon, usersIcon } from "../../Images/icons";
import NavLink from "../Links/NavLink";
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
        <AccountWrapper>
          <AccountIcon>{accountIcon}</AccountIcon>
          <AccountLabel title={auth.currentUser?.email ? auth.currentUser?.email : ''}>{auth.currentUser?.email}</AccountLabel>
        </AccountWrapper>
        <LinksWrapper>
          <NavLink route="/" icon={usersIcon} label="Users" />
          <NavLink route="/medicine" icon={medicineIcon} label="Medicine" />
        </LinksWrapper>
        <IconButton styles={{ border: "none", margin: '0 auto' }} onClick={handleLogOut}>{logoutIcon}</IconButton>
        <Toggle onClick={onToggleOpen} />
      </ContentWrapper>
    </Wrapper>
  );
}

export default React.memo(UserNavPanel);