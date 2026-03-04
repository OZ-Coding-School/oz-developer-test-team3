import Card from '../components/common/Card';
import ProgressBar from '../components/common/progressbar';
import Button from '../components/common/Button';
import hamster from '../assets/Icon.webp';
import { useQuestions } from '../hooks/queries/useQuestions';
import { useAnswerStore } from '../store';
import { useNavigate } from 'react-router-dom';
import { pickMostType } from '../utils/pickMostType';

function QuestionPage() {
  const navigate = useNavigate();
  const { data: picked, isLoading, isError, error } = useQuestions();

  const step = useAnswerStore((s) => s.step);
  const setStep = useAnswerStore((s) => s.setStep);
  const answers = useAnswerStore((s) => s.answers);
  const setAnswer = useAnswerStore((s) => s.setAnswer);
  const setResultType = useAnswerStore((s) => s.setResultType);

  const total = 5;

  if (isLoading) return <Card>로딩중...</Card>;
  if (isError) return <Card>에러: {error?.message ?? '요청 실패'}</Card>;
  if (!picked?.length) return <Card>질문 없음</Card>;

  const safeStep = Math.min(step, Math.min(total - 1, picked.length - 1));
  const question = picked[safeStep];
  const isLast = safeStep === total - 1;

  if (!question) return <Card>질문 데이터 오류</Card>;

  return (
    <Card className="">
      <ProgressBar current={safeStep + 1} total={total} />

      <img className="h-30 w-30" src={hamster} alt="" />
      <h1 className="mt-6 text-lg font-semibold">Q{safeStep + 1}</h1>
      <h2 className="mt-6 text-lg">{question.text}</h2>

      <div className="mt-6 flex flex-col gap-3">
        {question.options.map((opt, idx) => (
          <Button
            key={idx}
            className="bg-background text-body"
            onClick={() => {
              const key = `q${safeStep + 1}`;
              const type = opt.type;

              const nextAnswers = { ...answers, [key]: type };
              setAnswer(key, type);

              if (isLast) {
                const types = Object.values(nextAnswers);
                setResultType(pickMostType(types, type));
                navigate('/result');
                return;
              }

              setStep((prev) => Math.min(total - 1, prev + 1));
            }}
          >
            {opt.text}
          </Button>
        ))}
      </div>
    </Card>
  );
}

export default QuestionPage;
