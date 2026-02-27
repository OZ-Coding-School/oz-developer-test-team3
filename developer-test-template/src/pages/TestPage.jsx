import Button from '../components/common/Button';
import ShareIcon from '../assets/icons/share.svg';
import ShareWhiteIcon from '../assets/icons/share-white.svg';
import SparkleWhiteIcon from '../assets/icons/sparkle-white.svg';
import RefreshIcon from '../assets/icons/refresh.svg';
import ProgressBar from '../components/common/progressbar';
import { useState } from 'react';
import Badge from '../components/common/Badge';
import Card from '../components/common/Card';

function TestPage() {
  const [step, setStep] = useState(1);

  return (
    // 버튼 테스트
    <section className="flex flex-col items-center justify-center gap-4">
      <Card>
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

        {/* 예린, 카드, 뱃지 컴포넌트 이동 */}
        <div className="flex items-center justify-center">
          <div className="flex flex-wrap justify-center gap-2">
            <Badge>#React</Badge>
            <Badge>#TypeScript</Badge>
            <Badge>#CSS</Badge>
            <Badge>#Next</Badge>
            <Badge>#HTML</Badge>
            <Badge>#JS</Badge>
            <Badge>#Next</Badge>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default TestPage;
