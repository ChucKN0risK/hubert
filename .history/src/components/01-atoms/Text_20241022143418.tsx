import { createElement } from 'react';

interface TextProps {
  /** The HTML tag to use */
  tag: string | undefined;
  /** Whether the button can be interacted with */
  text?: boolean;
}

function Text({ tag, text }: TextProps) {
  return (
    createElement(tag, { className: 'text-body' }, text)
  );
}

export default Text