import { SET_CHANNEL } from "./types";

export const selectChannel = ({ id, title }) => {
  return { type: SET_CHANNEL, payload: { channelId: id, channelName: title } };
};
