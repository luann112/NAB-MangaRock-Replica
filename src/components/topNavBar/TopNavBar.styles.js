import styled from 'styled-components';

export const TopNavBarWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 72px;
  padding: 0 40px;
  background-color: #fff;
  font-size: 1rem;
  font-weight: 400;
  color: rgba(0,0,0,.87);
  box-shadow: 0 1px 5px 0 rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.12), 0 2px 4px 0 rgba(0,0,0,.14);
  font-family: 'Roboto';
`;

export const InnerWrapperStyled = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
`;

export const LogoStyled = styled.div`
  margin-right: 56px;
  img {
    vertical-align: middle;
  }
`;
