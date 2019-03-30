import React, { PureComponent } from 'react';
import { 
  SubMenuWrapperStyled,
  SubMenuItemStyled,
 } from './Menu.styles';

class SubMenu extends PureComponent {  
  renderSubMenuItem = (subMenuItem) => {
    return (
      <SubMenuItemStyled
        key={subMenuItem.id}
      >
        {subMenuItem.label}
      </SubMenuItemStyled>
    );
  }
  render() {
    const { subMenu, isOpen } = this.props;
    return (
      <SubMenuWrapperStyled
        isOpen={isOpen}      
      >
        {subMenu.map(this.renderSubMenuItem)}
      </SubMenuWrapperStyled>
    );
  }
}

export default SubMenu;
