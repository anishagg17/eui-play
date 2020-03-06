import { auth } from "firebase";

const initialState = {
  user: null,
};

export default async function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_USER":
      await auth.onAuthStateChanged(u => {
        console.log("u", u);
      });
      console.log(payload);
      return {
        user: payload,
      };

    case "REMOVE_USER":
      console.log("loggedout");
      return {
        user: null,
      };
    default:
      return state;
  }
}
