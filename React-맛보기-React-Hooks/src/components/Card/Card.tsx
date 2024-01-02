import { useReducer } from "react";

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

  return (
    <div className={styles.cardItem}>
      <div>
        <p>{title}</p>
        <p>
          <button onClick={() => dispatch("INCREMENT")}>+</button>
          <button onClick={() => dispatch("DECREMENT")}>-</button>
        </p>
        <p>
          클릭 : <span>{count}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
