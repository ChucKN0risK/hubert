import { createElement } from 'react';
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
  | 'time';

type TextVariant =
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

interface TextProps {
  /** The HTML tag to use */
  tag?: TextTag;
  /** The Text content */
  text?: string;
  /** The Text variant */
  variant?: TextVariant;
  /** The Text color */
  color?: string;
}

function Text({ tag = 'p', text, variant = 'body-1' }: TextProps) {
  return (
    createElement(tag, { className: `text-${variant}` }, text)
  );
}

export default Text