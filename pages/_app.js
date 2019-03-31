import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import initializeStore from 'src/store';
import MainLayout from 'src/components/mainLayout';


class MyApp extends App {

  static async getInitialProps({Component, ctx}) {

    // we can dispatch from here too
    ctx.store.dispatch({type: 'FOO', payload: 'foo'});

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };

  }

  render() {
    const {Component, pageProps, store} = this.props;
    return (
      <Container>
        <Provider store={store}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </Provider>
      </Container>
    );
  }

}

export default withRedux(initializeStore)(MyApp);