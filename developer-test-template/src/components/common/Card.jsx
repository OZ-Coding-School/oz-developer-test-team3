export default function Card({ children, className = '' }) {
  return (
    <div
      className={`mx-auto w-full rounded-2xl bg-white p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] ${className}`}
    >
      {children}
    </div>
  );
}
