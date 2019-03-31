export const OPEN_SIDE_TAB = 'topNavBar/OPEN_SIDE_TAB';
export const CLOSE_SIDE_TAB = 'topNavBar/CLOSE_SIDE_TAB';

const initialState = {
  isOpenSideTab: false,
};

// action creator

const openSideTab = () => ({ type: OPEN_SIDE_TAB });
const closeSideTab = () => ({ type: CLOSE_SIDE_TAB });

export const actions = {
  openSideTab,
  closeSideTab
}

const topNavBarReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case OPEN_SIDE_TAB:
      newState.isOpenSideTab = true;
      return newState;
    case CLOSE_SIDE_TAB:
      newState.isOpenSideTab = false;
      return newState;

    default:
      return state;
  }
};

export default topNavBarReducer;