import styles from "./HomePage.module.scss";
import { useContext, useReducer } from "react";
import { UserContext } from "../../../hooks/useContext";
import Header from "../../layout/Header/Header";
import { initialState, reducer } from "../../../Reducer/Count";

export default function HomePage() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <Header />
    </UserContext.Provider>
  );
}
