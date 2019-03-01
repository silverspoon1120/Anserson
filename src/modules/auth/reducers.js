import * as types from './constants';

const initialState = {
  init: false,
  isActive: false,
  user: null,
  authenticated: false,
  formAccess: false,
  submissionAccess: false,
  roles: {},
  is: {},
  error: ''
};

export const auth = config => (state = initialState, action) => {
  // Only proceed for this user.
  switch (action.type) {
    case types.USER_REQUEST:
      return {
        ...state,
        init: true,
        submissionAccess: false,
        isActive: true
      };
    case types.USER_REQUEST_SUCCESS:
      return {
        ...state,
        isActive: false,
        user: action.user,
        authenticated: true,
        error: ''
      };
    case types.USER_REQUEST_FAILURE:
      return {
        ...state,
        isActive: false,
        error: action.error
      };
    case types.USER_SUBMISSION_ACCESS:
      return {
        ...state,
        is: Object.keys(action.roles).reduce((prev, roleName) => ({
          ...prev,
          [roleName]: state.user.roles.indexOf(action.roles[roleName]._id) !== -1
        }), {}),
        submissionAccess: action.submissionAccess,
        roles: action.roles
      };
    case types.USER_FORM_ACCESS:
      return {
        ...state,
        formAccess: action.formAccess
      };
    case types.USER_LOGOUT:
      return {
        ...state,
        user: null,
        isActive: false,
        authenticated: false,
        error: ''
      };
    default:
      return state;
  }
};
