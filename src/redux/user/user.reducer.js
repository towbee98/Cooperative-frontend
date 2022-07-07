const initial_State = {
  currentUser: null,
};

const userReducer = (state = initial_State, action) => {
  return action.type === "set_current_user"
    ? { ...state, currentUser: action.payload }
    : { state };
};

export default userReducer;
