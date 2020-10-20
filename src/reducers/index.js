import { SET_CHANNEL } from "../actions/types";
import { user_info } from "../config/body.json";

const initialState = {
  channelId: user_info[1].id,
  channelName: user_info[1].title,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CHANNEL:
      return payload;

    default:
      return state;
  }
};

export default reducer;
