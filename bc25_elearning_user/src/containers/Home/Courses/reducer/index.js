import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const catalogCoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CATALOG_COURSES_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.CATALOG_COURSES_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.CATALOG_COURSES_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

const coursesByCatalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.COURSES_BY_CATALOG_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.COURSES_BY_CATALOG_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.COURSES_BY_CATALOG_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export { catalogCoursesReducer, coursesByCatalogReducer };
