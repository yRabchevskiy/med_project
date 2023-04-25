import React from 'react';
import { LinkIcon, LinkLable, LinkNav } from './style';

interface Props {
  route: string;
  label?: string;
  styles?: Object;
  icon?: JSX.Element;
}

const NavLink: React.FC<Props> = (props: Props) => {
  return (
    <LinkNav to={props.route} style={props.styles}>
      {props.icon && <LinkIcon>{props.icon}</LinkIcon>}
      {props.label && <LinkLable>{props.label}</LinkLable>}
    </LinkNav>
  );
}

export default React.memo(NavLink);