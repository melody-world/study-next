import styles from "./Header.module.scss";

const MENU_LIST = [
  {
    id: 1,
    title: "메뉴1",
  },
  {
    id: 2,
    title: "메뉴2",
  },
];

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <a className={styles.logo}>
          <img src={`${process.env.PUBLIC_URL}/logo192.png`}></img>
        </a>
        <ul className={styles.menuList}>
          {/* MENU_LIST만큼 루프를 돌며 메뉴가 그려집니다. */}
          {MENU_LIST.map((menu, index) => (
            <li key={index} className={styles.listItem}>
              {menu.title}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
