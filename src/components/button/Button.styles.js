import styled from 'styled-components';

export const ButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  border: none;
  border-radius: 2px;
  background: #29b6f6;
  color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  cursor: pointer;
  &:hover{
    opacity: 0.7;
  }
`;

export const ButtonTextStyled = styled.div`
  font-size: 14px;
  font-weight: 500;  
`;