import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'whatsapp';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#8B7D3C] text-white hover:bg-[#7A6D34] active:bg-[#6A5E2D]',
  secondary:
    'bg-[#E8792B] text-white hover:bg-[#D06B24] active:bg-[#B85E1F]',
  outline:
    'border-2 border-[#8B7D3C] text-[#8B7D3C] bg-transparent hover:bg-[#8B7D3C] hover:text-white active:bg-[#7A6D34]',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#20BD5A] active:bg-[#1DA851]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B7D3C]/50 focus:ring-offset-2';
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    const isExternal =
      href.startsWith('http') || href.startsWith('https') || href.startsWith('tel') || href.startsWith('mailto');

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
