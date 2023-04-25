import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkNav = styled(Link)`
  display: flex;
  margin-bottom: 12px;
  align-items: center;
  flex-shrink: 0;
  overflow: hidden;
  flex-wrap: nowrap;
`;

export const LinkIcon = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  width: 40px;
  height: 30px;
  svg {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
`;

export const LinkLable = styled.span`
  white-space: nowrap;
  margin-left: 16px;
  font-weight: 500;
  font-size: 18px;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
`;
