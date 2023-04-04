import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.header`
  height: 44px;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  padding: 12px 20px;
  border-bottom: 1px solid #d9d3d3;
`;

export const LinksWrapper = styled.div`
  display: flex;
  margin-right: auto;
  flex-wrap: nowrap;
  height: 100%;
`;


export const LinkNav = styled(Link)`
  display: inline-block;
  height: 100%;
  padding: 4px;
  line-height: 11px;
`;