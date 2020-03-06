import React, { Component, createContext } from "react";
import { auth } from "../fbConfig";

export const UserContext = createContext();

class UserProvider extends Component {
  state = {
    user: null,
  };
  unsubscribeFromFireStore = null;
  componentDidMount = async () => {
    await auth.onAuthStateChanged(u => {
      // console.log("u", u);
      if (u) this.setState({ user: u });
      else this.setState({ user: null });
    });
  };
  componentWillUnmount() {
    if (this.unsubscribeFromFireStore) this.unsubscribeFromFireStore();
  }
  render() {
    const { children } = this.props;
    const { user } = this.state;
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
  }
}
export default UserProvider;
