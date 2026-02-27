import { Link } from 'react-router-dom';
import Card from '../components/common/Card';

export default function HomePage() {
  return (
    <Card className="flex min-h-[524px] w-full max-w-[326px] flex-col gap-4">
      <Link
        to="/question"
        className="rounded-lg bg-black px-4 py-2 text-center text-white"
      >
        시작하기(질문페이지이동)
      </Link>
      <Link
        to="/test"
        className="rounded-lg bg-black px-4 py-2 text-center text-white"
      >
        테스트페이지(라우터 확인용)
      </Link>
      <Link
        to="/result"
        className="rounded-lg bg-black px-4 py-2 text-center text-white"
      >
        결과페이지(라우터확인용)
      </Link>
    </Card>
  );
}
