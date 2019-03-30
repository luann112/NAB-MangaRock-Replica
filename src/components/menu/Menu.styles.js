import styled, { css } from 'styled-components';

export const MenuWrapperStyled = styled.div`
display: flex;
height: 100%;
align-items: center;
`;
export const MenuItemStyled = styled.div`
display: flex;
align-items: center;
position: relative;
color: rgba(0,0,0,.54);
margin-right: 32px;
cursor: pointer;
span {
  text-transform: uppercase;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 21px;
}
&:hover {
  span {
    color: #29b6f6;
  }
  .chevron-down {
    border-top: 5px solid #29b6f6;
  }
}
`;

export const ChevronDownStyled = styled.div`
width: 0;
height: 0;
margin-left: 5px;
border-left: 5px solid transparent;
border-right: 5px solid transparent;
border-top: 5px solid rgba(0,0,0,.54);
`;

export const SubMenuWrapperStyled = styled.div`
  position: absolute;
  padding: 8px 0;
  overflow-y: auto;
  background: #fff;
  left: 0px;
  top: 46px;
  min-width: 128px;
  min-height: 112px;
  box-shadow: 0px 1px 1px 0px rgba(0,0,0,.54);
  visibility: hidden;
  ${props => props.isOpen && css`
    visibility: visible;
    z-index: 999;
  `}
`;

export const SubMenuItemStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: .875rem;
  font-weight: 400;
  line-height: 16px;
  color: rgba(0,0,0,.87);
  height: 32px;
  padding: 0 16px;
  &:hover {
    background: lightgrey;
  }
`;