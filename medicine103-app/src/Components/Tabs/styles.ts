import styled from 'styled-components';

export const TabsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  flex-wrap: nowrap;
  height: 40px;
  width: auto;
`;

interface ITab {
  isActive: boolean;
}
export const TabStyles = styled.span<ITab>`
  display: inline-block;
  padding: 8px 16px;
  flex-shrink: 0;
  border-bottom: ${props => !props.isActive ? '2px solid rgba(0, 0, 0, 0.5)' : '2px solid #5454d6'};
  font-size: 16px;
  font-weight: ${props => !props.isActive ? 500 : 600};
  cursor: pointer;
  color:${props => !props.isActive ? 'rgba(0, 0, 0, 0.8)' : '#5454d6'};;
`;