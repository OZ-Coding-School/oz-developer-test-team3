export default function Card({ children, className = '' }) {
  return (
    <div
      className={`mx-auto flex min-h-[524px] w-full max-w-[448px] flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] ${className}`}
    >
      {children}
    </div>
  );
}
