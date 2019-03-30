import React, { PureComponent } from 'react';
import { 
  MenuWrapperStyled,
 } from './Menu.styles';
import { MENU } from 'lib/enums';
import MenuItem from './MenuItem';

class Menu extends PureComponent {
  renderMenuItem = (menuItem) => (
    <MenuItem
      key={menuItem.id}
      menuItem={menuItem}
      isHaveSubMenu={!!menuItem.sub}
    />
  );
  render() {
    return (
      <MenuWrapperStyled>
        {MENU.map(this.renderMenuItem)}
      </MenuWrapperStyled>
    );
  }
}

export default Menu;
