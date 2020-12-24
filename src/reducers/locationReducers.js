import { UPDATE_CURRENT_LOCATION } from '../actions';

const initialState = {
  location: null
};

export const locationReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_LOCATION:
      return {
        ...state,
        location: action.payload
      };

    default:
      return state;
  }
};
