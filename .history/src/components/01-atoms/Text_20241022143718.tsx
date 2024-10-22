import { createElement } from 'react';

interface TextProps {
  /** The HTML tag to use */
  tag?: string;
  /** Whether the button can be interacted with */
  text?: string;
}

function Text({ tag = 'p', text }: TextProps) {
  return (
    createElement(tag, { className: 'text-body' }, text)
  );
}

export default Text