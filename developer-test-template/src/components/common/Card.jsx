export default function Card({ children }) {
  return (
    <div className="mx-auto w-full max-w-[420px] rounded-2xl bg-white p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
      {children}
    </div>
  );
}
