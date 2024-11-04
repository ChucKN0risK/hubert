import { ReactNode } from 'react';
import './Text.scss'

type TextTag =
  'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'label'
  | 'time';

export type TextVariant =
  'title-1'
  | 'title-2'
  | 'title-3'
  | 'title-4'
  | 'title-5'
  | 'title-6'
  | 'featured-1'
  | 'featured-2'
  | 'featured-3'
  | 'body-1'
  | 'body-2'
  | 'body-3'
  | 'caption-1'
  | 'caption-2';

interface TextProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * The HTML tag to use
   * @defaultValue 'p'
   **/
  as?: TextTag;
  /** The Text content */
  children: ReactNode
  /**
   * The text variant
   * @defaultValue 'body-1'
   **/
  variant?: TextVariant;
  /** The Text color */
  color?: string;
  /** Other CSS classes coming from parent component */
  className?: string;
}

function Text({ as = 'p', children, variant = 'body-1', className, ...props }: TextProps) {
  const Tag = as;

  return (
    <Tag className={`text-${variant} ${className}`} {...props}>{children}</Tag>
  );
}

export default Text;