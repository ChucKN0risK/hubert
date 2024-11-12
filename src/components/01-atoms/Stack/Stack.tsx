import { ElementType } from "react";
import './Stack.scss';

interface StackProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
  axis?: 'x' | 'y';
  align?: 'start' | 'center' | 'end';
  gap?:
  1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 12
  | 14
  | 16
  | 18
  | 20;
}

function Stack({ children, axis = 'y', gap = 2, as = 'div', align, className, ...props }: StackProps) {
  const Tag = as;
  return (
    <Tag
      className={`a-stack ${axis === 'y' ? 'a-stack--vertical' : ''} ${className ? className : ''}`}
      style={{ '--space': `var(--base-space-${gap})`, '--align-items': align }}
      {...props}
    >
      {children}
    </Tag>)
}

export default Stack;