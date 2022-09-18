import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const initialRegisCourseState = {
  loading: false,
  data: null,
  error: null,
};

const courseDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.COURSE_DETAILS_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.COURSE_DETAILS_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.COURSE_DETAILS_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

const regisCourseReducer = (state = initialRegisCourseState, action) => {
  switch (action.type) {
    case ActionType.REGIS_COURSE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.REGIS_COURSE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.REGIS_COURSE_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export { courseDetailsReducer, regisCourseReducer };
