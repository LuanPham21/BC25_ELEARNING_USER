import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const listCoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LIST_COURSES_REQUEST: {
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    }

    case ActionType.LIST_COURSES_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    }

    case ActionType.LIST_COURSES_FAILED: {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default listCoursesReducer;
