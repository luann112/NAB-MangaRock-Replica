import React, { Component } from 'react';
import { className as cn } from 'lib/utils';
import { IconStyled } from './Icon.styles';

const Icon = ({ className, type, ...rest }) => (
  <IconStyled className={cn('fa', `fa-${type}`, className)} {...rest} />
);

export default Icon;