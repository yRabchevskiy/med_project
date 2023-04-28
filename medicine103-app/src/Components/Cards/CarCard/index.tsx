import React from 'react';
import { CardWrapper } from './style';
import { ICar } from '../../../Models/inventory';

interface Props {
  data: ICar;
}

const CarCard: React.FC<Props> = (props: Props) => {
  return (
    <CardWrapper>
      
    </CardWrapper>
  );
}

export default React.memo(CarCard);