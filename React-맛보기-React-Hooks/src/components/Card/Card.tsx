import { useState, useReducer, useEffect } from "react";

import styles from "./Card.module.scss";
import Manual from "../Manual/Manual";

type CardProps = {
  title: string;
  clickCount: number;
};

type Action = "INCREMENT" | "DECREMENT";

const reducer = (clickCount: number, action: Action) => {
  switch (action) {
    case "INCREMENT":
      return clickCount + 1;
    case "DECREMENT":
      return clickCount - 1;
    default:
      return clickCount;
  }
};

const Card = (props: CardProps) => {
  const { title, clickCount } = props;
  const [count, dispatch] = useReducer(reducer, clickCount);
  const [cardStatus, setStatus] = useState("");

  useEffect(() => {
    // console.log("Card click count : ", count);
  }, [count]);

  return (
    <div className={styles.cardItem}>
      <div>
        <p>{title}</p>
        <p>
          <button onClick={() => dispatch("INCREMENT")}>+</button>
          <button onClick={() => dispatch("DECREMENT")}>-</button>
          <button onClick={() => setStatus("X")}>X</button>
        </p>

        <Manual clickCount={count} cardStatus={cardStatus} />
      </div>
    </div>
  );
};

export default Card;
