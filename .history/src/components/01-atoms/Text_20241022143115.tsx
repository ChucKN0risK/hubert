import { createElement } from 'react';

interface TextProps {
  /** The HTML tag to use */
  tag: string;
  /** Whether the button can be interacted with */
  text?: boolean;
}

function Text({ tag }: TextProps) {
  return (
    createElement(tag, { tag }, '...')
  );
}