import { useState } from "react";

import styles from "./Card.module.scss";

type CardProps = {
  title: string;
  clickCount: number;
};

const Card = (props: CardProps) => {
  const { title, clickCount } = props;
  const [count, setCount] = useState(clickCount);

  return (
    //
    <div className={styles.cardItem} onClick={() => setCount(count + 1)}>
      <div>
        <p>{title}</p>
        <p>
          클릭 : <span>{count}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;

/**
 * useState 예제
 */
// import { useState } from "react";

// import styles from "./Card.module.scss";

// type CardProps = {
//   title: string;
//   clickCount: number;
// };

// const Card = (props: CardProps) => {
//   const { title, clickCount } = props;
//   const [count, setCount] = useState(clickCount);

//   return (
//     //
//     <div className={styles.cardItem} onClick={() => setCount(count + 1)}>
//       <div>
//         <p>{title}</p>
//         <p>
//           클릭 : <span>{count}</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Card;
