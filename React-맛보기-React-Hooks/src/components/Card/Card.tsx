import { useState, useReducer, useEffect } from "react";

import styles from "./Card.module.scss";

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

  // 카운트 되지 않아야되는 상태
  const [notCount, setNotCount] = useState(0);

  useEffect(() => {
    console.log("Card click count : ", count);
  }, [count]);

  https: return (
    <div className={styles.cardItem}>
      <div>
        <p>{title}</p>
        <p>
          <button onClick={() => dispatch("INCREMENT")}>+</button>
          <button onClick={() => dispatch("DECREMENT")}>-</button>
          <button onClick={() => setNotCount(notCount + 1)}>X</button>
        </p>
        <p>
          클릭 : <span>{count}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
