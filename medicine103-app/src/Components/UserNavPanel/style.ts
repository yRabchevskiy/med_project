import styled from "styled-components";

export const Wrapper = styled.article`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background: white;
`;

export const ContentWrapper = styled.div`
  height: 100%;
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

export const AccountWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-wrap: nowrap;
  flex-shrink: 0;
  overflow: hidden;
  align-items: center;
`;

export const AccountIcon = styled.span`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: inline-flex;
  flex-shrink: 0;
  svg {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
`;

export const AccountLabel = styled.span`
  white-space: nowrap;
  margin-left: 16px;
  font-weight: 600;
  font-size: 20px;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
  flex-wrap: nowrap;
  overflow: hidden;
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