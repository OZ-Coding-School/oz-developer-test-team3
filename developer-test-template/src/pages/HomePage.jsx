import { Link } from 'react-router-dom';
import Badge from '../components/common/Badge';

export default function HomePage() {
  return (
    <main>
      <Link to="/question" className="rounded-lg bg-black px-4 py-2 text-white">
        시작하기(질문페이지이동)
      </Link>
      <Link to="/test" className="rounded-lg bg-black px-4 py-2 text-white">
        테스트페이지(라우터 확인용)
      </Link>
      <Link to="/result" className="rounded-lg bg-black px-4 py-2 text-white">
        결과페이지(라우터확인용)
      </Link>
    </main>
  );
}
