import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background: white;
`;

export const ContentWrapper = styled.div`
  height: 100vh;
  width: 80vw;
  max-width: 72px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  padding: 12px 16px;
  border-right: 2px solid #ebebeb;
  transition: 0.3s linear;
  transition-property: max-width;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.4);
  &.open {
    max-width: 300px;
  }
`;

export const User = styled.div`
  white-space: nowrap;
  line-height: 40px;
  height: 40px;
  margin-bottom: 12px;
  overflow: hidden;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
  flex-wrap: nowrap;
  overflow: hidden;
`;


export const LinkNav = styled(Link)`
  /* display: inline-block;
  height: 100%;
  padding: 4px;
  line-height: 11px; */
`;

export const Toggle = styled.span`
  display: inline-block;
  position: absolute;
  top: calc(50% - 40px);
  right: 4px;
  width: 4px;
  height: 80px;
  border-radius: 4px;
  background: #c7c7c7;
  cursor: pointer;
  border: 1px solid transparent;
  box-sizing: content-box;
`;