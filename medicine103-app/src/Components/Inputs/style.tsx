import styled from 'styled-components';

export const InputLabel = styled.label`
  font-size: 16px;
  margin-bottom: 4px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #5454d6;
`;

export const Input = styled.input`
  height: 40px;
  border-radius: 4px;
  outline: 0;
  border: 1px solid;
  border-color: #5454d6;
  background: transparent;
  padding: 4px 12px;
  font-size: 16px;
  margin-bottom: 2px;
  width: 100%;
`;

export const InputError = styled.span`
  font-size: 10px;
  color: #da3e26;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const InputIcon = styled.span`
  position: absolute;
  top: calc(50% - 12px);
  right: 12px;
  width: 24px;
  height: 24px;
  text-align: center;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  flex-shrink: 0;
  margin-bottom: 12px;
  cursor: text;
  &.error ${InputLabel} {
    color: #da3e26;
  }
  &.error ${Input} {
    color: #da3e26;
    border-color: #da3e26;
  }
  &.disabled * {
    cursor: default !important;
    opacity: 0.6;
  }
  &.disabled ${InputIcon} {
    pointer-events: none;
  }
`;
