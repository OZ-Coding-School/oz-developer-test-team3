export default function Badge({ children, variant = 'primary' }) {
  const variants = {
    primary: 'bg-background text-primary',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]} `}
    >
      {children}
    </span>
  );
}
