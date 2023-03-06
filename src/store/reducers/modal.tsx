import {SHOW_MODAL, CLOSE_MODAL} from '../actions/types';

const INITIAL_STATE = {
  visible: false,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const modal = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case SHOW_MODAL:
      return {...state, visible: true};

    case CLOSE_MODAL:
      return {...state, visible: false};

    default:
      return state;
  }
};
export default modal;
