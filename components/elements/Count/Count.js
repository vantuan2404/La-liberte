import { useContext } from "react";
import { UserContext } from "../../../hooks/useContext";
import styles from "./Count.module.scss";

const Count = ({}) => {
  const countContext = useContext(UserContext);
  const handleCount = (type) => {
    countContext.countDispatch(type);
  };
  return (
    <section className={styles.countWrapper}>
      <button onClick={() => handleCount("ADD_ITEM")}>Add</button>
      <button onClick={() => handleCount("REMOVE_ITEM")}>Remove</button>
      <button onClick={() => handleCount("RESET")}>Reset</button>
    </section>
  );
};

export default Count;
