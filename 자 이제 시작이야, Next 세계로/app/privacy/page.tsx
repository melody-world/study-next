import styles from "./pricacy.module.css";

// export default function Privacy() {
//   return (
//     <main>
//       <div className={styles.container}>
//         <h2 className={styles.title}>개인정보 처리방침</h2>
//         <p className={styles.content}>
//           개인정보 처리방침이란 이용자의 소중한 개인정보를 보호하여 안심하고
//           서비스를 이용할 수 있도록 회사가 서비스를 운영함에 있어 준수해야 할
//           지침을 말합니다. 우리는 사용자의 개인정보를 존중하며 보호하기 위해
//           최선을 다하고 있습니다. <br />
//           우리는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를
//           보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기
//           위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
//         </p>

//         <button type="button">더보기</button>

//         <p className={styles.content}>
//           개인정보 처리방침이란 이용자의 소중한 개인정보를 보호하여 안심하고
//           서비스를 이용할 수 있도록 회사가 서비스를 운영함에 있어 준수해야 할
//           지침을 말합니다. 우리는 사용자의 개인정보를 존중하며 보호하기 위해
//           최선을 다하고 있습니다. <br />
//           우리는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를
//           보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기
//           위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
//         </p>
//       </div>
//     </main>
//   );
// }

function Privacy(props: any) {
  return (
    <main>
      <div className={styles.container}>
        <h1>{props.now}</h1>
        <h2 className={styles.title}>개인정보 처리방침</h2>
        <p className={styles.content}>
          개인정보 처리방침이란 이용자의 소중한 개인정보를 보호하여 안심하고
          서비스를 이용할 수 있도록 회사가 서비스를 운영함에 있어 준수해야 할
          지침을 말합니다. 우리는 사용자의 개인정보를 존중하며 보호하기 위해
          최선을 다하고 있습니다. <br />
          우리는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를
          보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기
          위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
        </p>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  console.log("ssg");
  return {
    props: { now: performance.now() },
  };
}

export default Privacy;
