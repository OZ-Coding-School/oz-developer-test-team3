import { resultImages } from '../assets/results';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { useResults } from '../hooks/queries/useResult';
import { useAnswerStore } from '../store';

function ResultPage() {
  const type = useAnswerStore((s) => s.resultType);
  const { data, isLoading, isError, error } = useResults(type);

  if (!type) return <Card>결과 타입이 없어요 (질문부터 진행해줘)</Card>;
  if (isLoading) return <Card>로딩중...</Card>;
  if (isError) return <Card>에러: {error?.message ?? '요청 실패'}</Card>;
  if (!data) return <Card>결과 없음</Card>;

  const imgSrc = resultImages[data.type];
  console.log(imgSrc);

  return (
    <Card className="min-h-[524px] w-full max-w-[448px]">
      <header>
        <p className="">당신의 개발자 유형</p>
        <h1 className="">{data.name}</h1>
      </header>

      {imgSrc && (
        <img src={imgSrc} alt={data.name} className="mt-4 h-32 w-32" />
      )}
      <section>
        <h2> {data.title} </h2>
        <p>{data.description}</p>
        <Badge></Badge>
      </section>
      <section>{data.characteristics}</section>
      <nav>
        <Button>결과 공유하기</Button>
        <Button>다시 테스트하기</Button>
      </nav>
      <footer>
        <small>made with ❤ ozcoding</small>
      </footer>
    </Card>
  );
}

export default ResultPage;
