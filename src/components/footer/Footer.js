import React, { PureComponent } from 'react';
import { 
  FooterWrapperStyled,
  InnerWrapperStyled,
 } from './Footer.styles';

class Footer extends PureComponent {
  render() {
    return (
      <FooterWrapperStyled>
        <InnerWrapperStyled></InnerWrapperStyled>
      </FooterWrapperStyled>
    );
  }
}

export default Footer;
