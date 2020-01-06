import { ActionTypes } from "../constants";

export const initialState = {
  links: [],
  fetching: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_LINKS:
      return {
        fetching: false,
        links: action.links,
      };

    default:
      return state;
  }
};

export default reducer;
