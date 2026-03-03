import cn from '../../utils/cn';

const base =
  'inline-flex items-center justify-center rounded-sm font-medium shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)]';

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
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
