import Badge from '../components/common/Badge';
import Card from '../components/common/Card';

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#FDF2F8] to-[#FFFFFF]">
      <Card>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge>#React</Badge>
          <Badge>#TypeScript</Badge>
          <Badge>#CSS</Badge>
          <Badge>#Next</Badge>
          <Badge>#HTML</Badge>
          <Badge>#JS</Badge>
          <Badge>#Next</Badge>
        </div>
      </Card>
    </div>
  );
}
