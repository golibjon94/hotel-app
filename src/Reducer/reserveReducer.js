import { RESERVE_ROOM } from "./reserveType";
export const initialState = {
  reservedRooms: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case RESERVE_ROOM:
      return (state = {
        ...state,
        reservedRooms: [...state.reservedRooms, action.payload],
      });
    default:
      return state;
  }
};
export default reducer;