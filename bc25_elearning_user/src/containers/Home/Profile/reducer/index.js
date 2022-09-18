import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const initialCancelRegistrationState = {
  loading: false,
  data: null,
  error: null,
};

const initialStateEditProfile = {
  loading: false,
  data: null,
  error: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.PROFILE_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }

    case ActionType.PROFILE_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }

    case ActionType.PROFILE_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

const cancelRegistrationReducer = (
  state = initialCancelRegistrationState,
  action
) => {
  switch (action.type) {
    case ActionType.CANCEL_REGISTRATION_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }

    case ActionType.CANCEL_REGISTRATION_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }

    case ActionType.CANCEL_REGISTRATION_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

const editProfileReducer = (state = initialStateEditProfile, action) => {
  switch (action.type) {
    case ActionType.EDIT_PROFILE_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }

    case ActionType.EDIT_PROFILE_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }

    case ActionType.EDIT_PROFILE_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export { profileReducer, cancelRegistrationReducer, editProfileReducer };
