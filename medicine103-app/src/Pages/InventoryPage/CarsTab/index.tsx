/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { ICar } from '../../../Models/inventory';
import { useGetCollection } from '../../../Contexts/Api/api';
import { PageContent } from '../../styles';
import { CarsWrapper } from './style';
import CarCard from '../../../Components/Cards/CarCard';
import { CardWrapper } from '../../../Components/Cards/CarCard/style';

interface Props {
}

const CarsTab: React.FC<Props> = (props: Props) => {
  const [cars, setCars] = React.useState<ICar[] | null>(null);
  const { response, loading, error, onGetCollection } = useGetCollection<ICar[]>();

  React.useEffect(() => {
    getCars();
  }, []);

  React.useEffect(() => {
    if (response) {
      setCars(response);
    }
  }, [response]);

  const getCars = () => {
    onGetCollection('cars');
  };
  return (
    <PageContent>
      <CarsWrapper>
        {cars && cars.length && (
          <>
            {cars.map(it => <CarCard key={it.id + 'car'} data={it} />)}
            <CardWrapper>1</CardWrapper>
            <CardWrapper>2</CardWrapper>
            <CardWrapper>3</CardWrapper>
            <CardWrapper>+</CardWrapper>
          </>
        )}
        {loading && <>Loading</>}
        {error && <>{error}</>}
      </CarsWrapper>
    </PageContent>
  );
}

export default React.memo(CarsTab);