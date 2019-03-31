import styled, { css } from 'styled-components';

export const TopNavBarWrapperStyled = styled.div`
  height: 92px;
  background: #f5f5f5;
  @media (max-width: 991px) {
    height: 76px;
  } 
`;

export const TopNavBarStyled = styled.div`
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
  @media (max-width: 991px) {
    height: 56px;
    padding: 0 10px 0 16px;
  }
`;

export const InnerWrapperStyled = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  ${props => props.right && css`
    @media (max-width: 991px) {
      display: none;
    }
  `}
  ${props => props.inSmallScreen && css`
    display: none;
    @media (max-width: 991px) {
      display: flex;
    }
  `}
`;

export const LogoStyled = styled.div`
  margin-right: 56px;
  cursor: pointer;
  img {
    vertical-align: middle;
    @media (max-width: 991px) {
      height: 36px;
    }
  }
`;

export const IconWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: rgba(0,0,0,.87);
  margin: 0 4px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  i {
    font-size: 24px;
  }
  &:hover {
    background: lightgrey;
  }
`;
