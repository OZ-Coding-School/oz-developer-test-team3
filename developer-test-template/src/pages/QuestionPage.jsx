import { useState } from 'react';
import Card from '../components/common/Card';
import ProgressBar from '../components/common/progressbar';
import Button from '../components/common/Button';
import { useQuestions } from '../hooks/queries/useQuestions';
import hamster from '../assets/hamster.png';

function QuestionPage() {
  const { data: picked, isLoading, isError, error } = useQuestions();
  const [step, setStep] = useState(0);

  if (isLoading) return <Card>로딩중...</Card>;
  if (isError) return <Card>에러: {error?.message ?? '요청 실패'}</Card>;
  if (!picked?.length) return <Card>질문 없음</Card>;

  const question = picked[step];

  return (
    <Card className="flex min-h-[524px] w-full max-w-[448px] flex-col items-center justify-center">
      <ProgressBar current={step + 1} total={5} />

      <img className="h-30 w-30" src={hamster} alt="" />

      <h1 className="mt-6 text-lg font-semibold">Q{step + 1}</h1>
      <h2 className="mt-6 text-lg">{question.text}</h2>

      <div className="mt-6 flex flex-col gap-3">
        {question.options.map((opt, idx) => (
          <Button
            key={idx}
            type="button"
            className="bg-background text-body"
            onClick={() => setStep((prev) => Math.min(4, prev + 1))}
          >
            {opt.text}
          </Button>
        ))}
      </div>
    </Card>
  );
}

export default QuestionPage;
