import { connect } from 'react-redux';
import SideTab from 'src/components/sideTab';
import { actions } from 'src/reducers/topNavBar';

const mapStateToProps = ({ topNavBar }) => ({
  isOpenSideTab: topNavBar.isOpenSideTab,
});

const mapDispatchToProps = {
  closeSideTab: actions.closeSideTab,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideTab);