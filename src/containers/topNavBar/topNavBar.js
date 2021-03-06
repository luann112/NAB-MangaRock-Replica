import { connect } from 'react-redux';
import TopNavBar from 'src/components/topNavBar';
import { actions, OPEN_SIDE_TAB } from 'src/reducers/topNavBar/topNavBar.js';

const mapStateToProps = ({ topNavBar }) => ({
  isOpenSideTab: topNavBar.isOpenSideTab,
});

const mapDispatchToProps = {
  openSideTab: actions.openSideTab,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopNavBar);
