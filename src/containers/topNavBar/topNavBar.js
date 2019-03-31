import withRedux from 'next-redux-wrapper';
import initializeStore from 'src/store';
import TopNavBar from 'src/components/topNavBar';

const mapStateToProps = ({ topNavBar }) => ({
  isOpenSideTab: topNavBar.isOpenSideTab,
});

const mapDispatchToProps = () => ({});

export default withRedux(
  initializeStore,
  mapStateToProps,
  mapDispatchToProps,
)(TopNavBar);