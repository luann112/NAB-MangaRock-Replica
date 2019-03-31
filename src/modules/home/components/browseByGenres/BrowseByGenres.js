import React, { Component } from 'react';
import {
  BrowseByGenresWrapperStyled,
  LabelStyled,
} from './BrowseByGenres.styles';

class BrowseByGenres extends Component {
  render() {
    return (
      <BrowseByGenresWrapperStyled>
        <LabelStyled>
          <h2>Browse By Genres</h2>
        </LabelStyled>
      </BrowseByGenresWrapperStyled>
    );
  }
}

export default BrowseByGenres;