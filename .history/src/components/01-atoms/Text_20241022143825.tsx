import { createElement } from 'react';

interface TextProps {
  /** The HTML tag to use */
  tag?: string;
  /** The Text content */
  text?: string;
}

function Text({ tag = 'p', text }: TextProps) {
  return (
    createElement(tag, { className: 'text-body' }, text)
  );
}

export default Text