const base = 'inline-flex items-center justify-center rounded-sm font-medium';

const variants = {
  primary: 'bg-primary text-white',
  secondary: 'bg-background text-primary',
  option: 'bg-background',
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
