import React, { Component, createContext } from "react";
import { firestore } from "../fbConfig";

export const CodeContext = createContext();

class CodeProvider extends Component {
  state = {
    items: [],
  };
  unsubscribeFromFireStore = null;
  componentDidMount = async () => {
    await firestore.collection("Eui").onSnapshot(snap => {
      let items = [];
      snap.docs.forEach(d => items.push({ id: d.id, ...d.data() }));
      this.setState({ items });
      // console.log("items", items);
    });
  };
  componentWillUnmount() {
    if (this.unsubscribeFromFireStore) this.unsubscribeFromFireStore();
  }
  render() {
    const { children } = this.props;
    return (
      <CodeContext.Provider value={this.state}>{children}</CodeContext.Provider>
    );
  }
}
export default CodeProvider;
