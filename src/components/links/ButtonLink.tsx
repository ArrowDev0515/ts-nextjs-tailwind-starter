import clsx from 'clsx';
import * as React from 'react';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

enum ButtonVariant {
  'primary',
  'outline',
  'ghost',
  'light',
  'dark',
}

type ButtonLinkProps = {
  isDarkBg?: boolean;
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

export default function ButtonLink({
  children,
  className,
  variant = 'primary',
  isDarkBg = false,
  ...rest
}: ButtonLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        className,
        'inline-flex px-4 py-2 font-semibold rounded',
        'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
        'shadow-sm',
        'transition-colors duration-75',
        [
          variant === 'primary' && [
            'bg-primary-400 text-white',
            'border border-primary-500',
            'hover:bg-primary-500 hover:text-white',
            'active:bg-primary-600',
            'disabled:bg-primary-600 disabled:hover:bg-primary-600',
          ],
          variant === 'outline' && [
            'text-primary-500',
            'border border-primary-500',
            isDarkBg
              ? 'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800'
              : 'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
          ],
          variant === 'ghost' && [
            'text-primary-500',
            'shadow-none',
            isDarkBg
              ? 'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800'
              : 'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
          ],
          variant === 'light' && [
            'bg-white text-dark ',
            'border border-gray-300',
            'hover:text-dark hover:bg-gray-100',
            'active:bg-white/80 disabled:bg-gray-200',
          ],
          variant === 'dark' && [
            'bg-gray-900 text-white',
            'border border-gray-600',
            'hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700',
          ],
        ],
        'disabled:cursor-not-allowed'
      )}
    >
      {children}
    </UnstyledLink>
  );
}
