import React, { PureComponent } from 'react';
import Head from 'next/head';
 import MainLayout from 'src/components/mainLayout';

class Home extends PureComponent {
  render() {
    return (
      <MainLayout>
        <div>this is Home</div>
      </MainLayout>
    );
  }
}

export default Home;
