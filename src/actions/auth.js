export const autheticate = ({ email }) => async dispatch => {
  dispatch({
    type: "SET_USER",
    payload: { email },
  });
};

export const logout = () => dispatch => {
  dispatch({ type: "REMOVE_USER" });
};
