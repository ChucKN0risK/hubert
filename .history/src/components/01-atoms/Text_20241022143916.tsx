import { createElement } from 'react';

interface TextProps {
  /** The HTML tag to use */
  tag?: string;
  /** The Text content */
  text?: string;
  /** The Text variant */
  variant?: string;
}

function Text({ tag = 'p', text, variant = 'bodecededey' }: TextProps) {
  return (
    createElement(tag, { className: `text-${variant}` }, text)
  );
}

export default Text