import { ReactNode } from 'react';

interface Props {
  children?: ReactNode
}

import './GlobalStyles.scss';
function GlobalStyles({ children }: Props) {
  return children;
}

export default GlobalStyles;
