import React from 'react';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ primary, block, children }) => (
  <Styled.Button primary={primary} block={block}>
    {children}
  </Styled.Button>
);

export default Button;
