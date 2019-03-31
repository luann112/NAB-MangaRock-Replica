import React, { Component } from 'react';
import Router from 'next/router';
import {
  MangaWrapperStyled
} from './Manga.styles';

class Manga extends Component {
  render() {
    return (
      <MangaWrapperStyled className="container">
        this is Manga Page
      </MangaWrapperStyled>
    );
  }
}

export default Manga;