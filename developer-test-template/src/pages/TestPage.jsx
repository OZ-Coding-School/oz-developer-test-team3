import Button from '../components/common/Button';
import ShareIcon from '../assets/icons/share.svg';
import ShareWhiteIcon from '../assets/icons/share-white.svg';
import SparkleWhiteIcon from '../assets/icons/sparkle-white.svg';
import RefreshIcon from '../assets/icons/refresh.svg';
import ProgressBar from '../components/common/progressbar';
import { useState } from 'react';

function TestPage() {
  const [step, setStep] = useState(1);

  return (
    // 버튼 테스트
    <div className="flex flex-col items-center justify-center gap-4">
      <Button variant="primary" size="small">
        <span className="inline-flex items-center gap-2">
          <img src={SparkleWhiteIcon} alt="" className="h-5 w-5" />
          시작하기
        </span>
      </Button>
      <Button variant="primary" size="medium">
        <span className="inline-flex items-center gap-2">
          <img src={ShareWhiteIcon} alt="" className="h-5 w-5" />
          결과 공유하기
        </span>
      </Button>
      <Button variant="secondary" size="medium">
        <span className="inline-flex items-center gap-2">
          <img src={ShareIcon} alt="" className="h-5 w-5" />
          Secondary
        </span>
      </Button>
      <Button variant="option" size="medium">
        <span className="inline-flex items-center gap-2">
          <img src={RefreshIcon} alt="" className="h-5 w-5" />
          질문 선택 버튼
        </span>
      </Button>
      {/* 프로그래스바 */}
      <ProgressBar current={step} />
      {/* 테스트용 게이지 올리기 */}
      <button
        type="button"
        onClick={() => setStep((prev) => Math.min(5, prev + 1))}
      >
        다음질문
      </button>
    </div>
  );
}

export default TestPage;
