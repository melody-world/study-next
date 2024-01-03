import styles from "./Card.module.scss";

type CardProps = {
  title: string;
};

const Card = (props: CardProps) => {
  const { title } = props;

  return (
    //
    <div className={styles.cardItem}>
      <div>{title}</div>
    </div>
  );
};

export default Card;
