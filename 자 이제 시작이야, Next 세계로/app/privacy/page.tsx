"use client";

import { useEffect, useState } from "react";
import styles from "./privacy.module.css";

export default function Privacy() {
  const [content, setContent] = useState<string>();
  const [active, setActive] = useState<boolean>(false);

  // 개인 정보 처리방침 데이터 호출
  const getPrivacyData = async () => {
    await fetch(`https://api.api-ninjas.com/v1/loremipsum?paragraphs=` + 10, {
      method: "GET",
      headers: {
        "X-Api-Key": "MoP6QUtCzVcry1veVMYm0Q==bjqHqorrqpqid7C7",
      },
    })
      .then((res) => res.json())
      .then((result) => setContent(result.text));
  };

  // 더보기 버튼 클릭 시
  const handleMoreView = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    getPrivacyData();
  }, []);

  return (
    <main>
      <div className={styles.container}>
        <h2 className={styles.title}>개인정보 처리방침</h2>
        <p className={`${styles.content} ${active ? styles.active : ""}`}>
          {content}
        </p>

        <button
          type="button"
          className={styles.moreView}
          onClick={() => handleMoreView()}
        >
          {active ? "닫기" : "더보기"}
        </button>
      </div>
    </main>
  );
}
