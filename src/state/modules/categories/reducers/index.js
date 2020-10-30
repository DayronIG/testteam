import {
  CATEGORIES,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAILURE,
} from '../constants';

const initState = {
  error: false,
  loaded: false,
  loading: false,
  categories: [],
};

export default (state = initState, action) => {
  // eslint-disable-next-line no-debugger
  debugger;
  switch (action.type) {
    case CATEGORIES:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false,
        categories: [],
      };
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        loaded: true,
        error: false,
        loading: false,
        categories: action.payload.data,
      };
    case CATEGORIES_FAILURE:
      return {
        ...state,
        loaded: false,
        error: true,
        loading: false,
        categories: [],
      };
    default:
      return state;
  }
};
