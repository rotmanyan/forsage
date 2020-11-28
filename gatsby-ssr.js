import React from 'react';
import { TokenServiceWrapper } from './src/contexts/tokenServiceContext';
import { UiContextWrapper } from './src/contexts/uiContext';

export const wrapRootElement = ({ element }) => (
  <UiContextWrapper>
    <TokenServiceWrapper>
      { element }
    </TokenServiceWrapper>
  </UiContextWrapper>
)

