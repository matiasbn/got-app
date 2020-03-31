import initialState from './initial-state';
import ACTION_TYPES from '../common/action-types';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_NAME:
      return {
        ...state,
        name: action.value,
      };
    case ACTION_TYPES.CHANGE_HOUSE:
      return {
        ...state,
        house: action.value,
      };
    case ACTION_TYPES.SHOW_CHARACTER:
      return {
        ...state,
        show: true,
        character: action.value,
      };
    case ACTION_TYPES.HIDE_CHARACTER:
      return {
        ...state,
        show: false,
      };
    default:
  }
  return state;
};

export default reducer;
