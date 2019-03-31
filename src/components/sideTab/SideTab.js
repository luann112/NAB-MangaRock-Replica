import React, { Component } from 'react';
import {
  SideTabWrapperStyled,
  SideTabHeaderStyled,
  SideTabMenuStyled,
  SideTabMenuItemStyled,
  SideTabMoreInfoStyled,
  SideTabSocialInfoStyled,
  AvatarStyled,
  CloseButtonStyled,
} from './SideTab.styles';
import Button from 'src/components/button';
import Icon from 'src/components/icon';
import {
  SIDE_TAB_MENU
} from 'lib/enums';

class SideTab extends Component {
  renderSideTabMenuItem = (menuItem) => {
    return (
      <SideTabMenuItemStyled key={menuItem.id}>{menuItem.label}</SideTabMenuItemStyled>
    );
  }
  renderSideTabMenu = () => {
    return (
      <SideTabMenuStyled>
        {SIDE_TAB_MENU.map(this.renderSideTabMenuItem)}
      </SideTabMenuStyled>
    );
  }
  render() {
    return (
      <SideTabWrapperStyled>
        <SideTabHeaderStyled>
          <AvatarStyled>
            <img src="./static/img/avatar_placeholder.svg " />
          </AvatarStyled>
          <Button>SIGN IN</Button>
          <CloseButtonStyled>
            <Icon type="times"/>
          </CloseButtonStyled>
        </SideTabHeaderStyled>
        {this.renderSideTabMenu()}
        <SideTabMoreInfoStyled></SideTabMoreInfoStyled>
        <SideTabSocialInfoStyled></SideTabSocialInfoStyled>
      </SideTabWrapperStyled>
    );
  }
}

export default SideTab;