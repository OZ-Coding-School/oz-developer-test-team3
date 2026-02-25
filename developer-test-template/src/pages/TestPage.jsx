import Button from '../components/common/Button';
import ShareIcon from '../assets/icons/share.svg';
import ShareWhiteIcon from '../assets/icons/share-white.svg';
import SparkleWhiteIcon from '../assets/icons/sparkle-white.svg';
import RefreshIcon from '../assets/icons/refresh.svg';

function TestPage() {
  return (
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
    </div>
  );
}

export default TestPage;
