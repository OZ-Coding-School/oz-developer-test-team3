function ProgressBar({ current = 1, total = 5 }) {
  const percent = (current / total) * 100;

  return (
    <div className="w-full max-w-96">
      <div className="mb-2 flex justify-between">
        <p className="text-muted">진행률</p>
        <p className="text-primary">
          {current}/{total}
        </p>
      </div>

      {/* 토탈 트랙 */}
      <div
        role="progressbar"
        aria-label="진행률"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={current}
        className="bg-progress-track h-2 w-full overflow-hidden rounded-lg"
      >
        {/* 게이지 */}
        <div className="bg-primary h-full" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;
