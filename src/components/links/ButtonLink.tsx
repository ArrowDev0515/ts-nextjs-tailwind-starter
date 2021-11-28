import clsx from 'clsx';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

enum ButtonVariant {
  'dark',
  'light',
  'primary',
}

type ButtonLinkProps = {
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

export default function ButtonLink({
  children,
  className = '',
  variant = 'dark',
  ...rest
}: ButtonLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        'animated-underline hover:text-primary-400 inline-block px-4 py-2 font-bold rounded',
        'border border-gray-600 shadow-sm',
        'focus-visible:text-primary-400 focus:outline-none',
        {
          'bg-dark text-white': variant === 'dark',
          'bg-white text-dark hover:bg-gray-200 hover:text-dark focus-visible:text-dark border-gray-400':
            variant === 'light',
          'bg-primary-400 text-black hover:bg-primary-400/90 hover:text-black border-primary-500 focus-visible:text-dark':
            variant === 'primary',
        },
        className
      )}
      style={
        variant === 'primary'
          ? ({
              '--clr-primary-400': 'white',
              '--clr-primary-500': 'white',
            } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </UnstyledLink>
  );
}
