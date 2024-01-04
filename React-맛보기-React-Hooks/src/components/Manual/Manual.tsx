import { useMemo } from "react";

type ManualProps = {
  clickCount: number;
  cardStatus: string;
};

const setClickCount = (clickCount: number) => {
  console.log("카드가 클릭되었습니다.");
};

const setCardStatus = (cardStatus: string) => {
  console.log("카드가 삭제됩니다.");
};

const Manual = (props: ManualProps) => {
  const { clickCount, cardStatus } = props;
  useMemo(() => setClickCount(clickCount), [clickCount]);
  useMemo(() => setCardStatus(cardStatus), [cardStatus]);

  return (
    <div>
      <span>{clickCount}</span>
    </div>
  );
};

export default Manual;
