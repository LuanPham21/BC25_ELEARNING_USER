import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const searchCoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SEARCH_COURSES_REQUEST: {
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    }
    case ActionType.SEARCH_COURSES_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    }
    case ActionType.SEARCH_COURSES_FAILED: {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default searchCoursesReducer;
