import styles from "./Home.module.scss";
import Card from "../components/Card/Card";

const PROJECT_LIST = [
  {
    id: 1,
    title: "광명찾자",
  },
  {
    id: 2,
    title: "하루단어",
  },
  {
    id: 3,
    title: "폭탄찾자",
  },
];

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>프로젝트 </h1>
      <div className={styles.cardList}>
        {/* PROJECT_LIST만큼 루프를 돌며 카드 컴포넌트를 그립니다. */}
        {PROJECT_LIST.map((item, index) => (
          <Card key={item.id} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Home;
