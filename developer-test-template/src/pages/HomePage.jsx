import Card from '../components/common/Card';
import Hamster from '../assets/icon.webp';
import Spakle from '../assets/icons/sparkle-white.svg';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Card className="flex min-h-[524px] w-full max-w-[326px] flex-col gap-4">
      <header className="flex flex-col items-center">
        <img src={Hamster} alt="hamsterImage" className="h-32 w-32" />
        <h1 className="text-heading mt-6 text-2xl font-semibold">
          나는 어떤 개발자일까?
        </h1>
        <h2 className="text-description mt-4 text-base font-normal">
          햄스터 개발자 유형 테스트
        </h2>
      </header>
      <section>
        <div className="bg-background text-body mt-8 flex h-[72px] w-[262px] items-center justify-center rounded-sm text-center">
          <p>
            ✨ 5개의 질문으로 알아보는 <br /> 나의 개발자 성향
          </p>
        </div>
      </section>
      <Link to="/question" className="mt-8 inline-block">
        <Button
          className="rounded-lg shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]"
          size="small"
        >
          <img src={Spakle} alt="Spakle" />
          시작하기
        </Button>
      </Link>
      <footer className="text-muted mt-8 text-xs">made with ❤ Ozcoding️</footer>
    </Card>
  );
}
