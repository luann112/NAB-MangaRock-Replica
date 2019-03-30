import React, { Component } from 'react';
import Icon from 'src/components/icon'
import { ButtonStyled, ButtonTextStyled } from './Button.styles';

const Button = ({ icon, children, ...rest }) => {
  const iconElement = icon && <Icon type={icon}/>
  return (
    <ButtonStyled {...rest}>
      {iconElement}
      <ButtonTextStyled>{children}</ButtonTextStyled>
    </ButtonStyled>
  );
}

export default Button;