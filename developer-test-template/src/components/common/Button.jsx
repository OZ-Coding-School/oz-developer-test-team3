const base =
  'inline-flex items-center justify-center rounded-[var(--radius-sm)] font-medium';

const variants = {
  primary: 'bg-[#EF6D8A] text-white',
  secondary: 'bg-[#FDF2F8] text-[#EF6D8A]',
  option: 'bg-[#FDF2F8]',
};

const sizes = {
  small: 'h-12 w-[262px] text-base',
  medium: 'h-12 w-[384px] text-base',
};

function Button({
  variant = 'primary',
  size = 'medium',
  className = '',
  children,
  ...props
}) {
  return (
    <button
      className={[base, variants[variant], sizes[size], className].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
