import React from 'react';
import { PageWrapperStyles } from './style';

interface Props {
  styles?: Object;
  children?: React.ReactNode;
}

const PageWrapper: React.FC<Props> = (props: Props) => {
  return (
    <PageWrapperStyles style={props.styles}>
      {props.children}
    </PageWrapperStyles>
  );
}

export default React.memo(PageWrapper);