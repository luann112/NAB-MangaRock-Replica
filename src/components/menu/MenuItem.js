import React, { PureComponent } from 'react';
import { 
  MenuItemStyled,
  ChevronDownStyled,
 } from './Menu.styles';
 import SubMenu from './SubMenu';

class Menu extends PureComponent {
  state = { isOpenSubMenu: false}
  
  renderSubMenu = () => {
    const { isOpenSubMenu } = this.state;
    const { menuItem: { sub } } = this.props;
    return (
      <SubMenu subMenu={sub} isOpen={isOpenSubMenu} />
    );
  }

  toggleSubMenu = () => {
    const { isHaveSubMenu } = this.props;
    if (isHaveSubMenu) {
      this.setState(prevState => ({ isOpenSubMenu: !prevState.isOpenSubMenu }));
    }
  }

  render() {
    const { menuItem, isHaveSubMenu } = this.props;
    console.log('isHaveSubMenu - ', isHaveSubMenu)
    return (
      <MenuItemStyled onClick={this.toggleSubMenu}>
        <span>{menuItem.label}</span>
        {isHaveSubMenu && <ChevronDownStyled className="chevron-down" />}
        {isHaveSubMenu && this.renderSubMenu()}
      </MenuItemStyled>
    );
  }
}

export default Menu;
