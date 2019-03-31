import styled, { css } from 'styled-components';

export const SideTabWrapperStyled = styled.div`
  display: flex;
  z-index: 999;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: #fff;
  position: absolute;
  opacity: 1;
  left: 100%;
  top: 0;
  transition: all 400ms ease;
  ${props => props.isOpen && css`
    left: 0;
    top: 0;
  `}
`;
export const SideTabHeaderStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;

  height: 128px;
  background-color: #fafafa;
  position: relative;
  border: 1px solid hsla(0,0%,74%,.38);
`;

export const SideTabMenuStyled = styled.div`
  margin: 0 24px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid hsla(0,0%,74%,.38);
`;

export const SideTabMenuItemStyled = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 28px;
  color: rgba(0,0,0,.54);
  padding-top: 12px;
  padding-bottom: 12px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: #29b6f6;
    text-decoration: underline;
  }
`;
export const SideTabMoreInfoStyled = styled.div`
  padding: 12px 24px;
`;
export const SideTabSocialInfoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  height: 80px;
  background-color: #fafafa;
  border: 1px solid hsla(0,0%,74%,.38);
`;

export const AvatarStyled = styled.div`
  margin-right: 20px;
  border: 0px;
  border-radius: 50%;
  img {
    width: 80px;
    height: 80px;
  }
`;

export const CloseButtonStyled = styled.div`
  position: absolute;
  right: 16px;
  top: 10px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin: 5px;
  color: rgba(0,0,0,.87);
  border-radius: 50%;
  font-size: 24px;
  height: 32px;
  width: 32px;
  &:hover {
    background: lightgrey;
  }
`;