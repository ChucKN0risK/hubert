import { ElementType, ReactNode } from "react";
import './Stack.scss';

interface StackProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
  axis?: 'x' | 'y';
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
  children: ReactNode;
}

function Stack({ children, axis = 'y', gap = 2, as = 'div' }: StackProps) {
  const Tag = as;
  return (
    <Tag
      className={`a-stack ${axis === 'y' ? 'a-stack--vertical' : ''}`}
      style={{ '--space': `var(--base-space-${gap})` }}
    >
      {children}
    </Tag>)
}

export default Stack;