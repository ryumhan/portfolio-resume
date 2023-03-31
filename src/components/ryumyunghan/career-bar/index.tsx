import React, { useMemo } from 'react';
import { Company } from '@/model/company';
import { CareerCircleContainer, Circle } from './style';

const YEAR_WEIGHT = 80;

interface Props {
  careerPath: Company[];
}

const CareerBar = ({ careerPath }: Props): React.ReactElement => {
  return (
    <CareerCircleContainer>
      {useMemo(
        () =>
          careerPath.map((company) => (
            <Circle
              isActive={!!company.duration}
              size={company.duration ? company.duration * YEAR_WEIGHT : 150}
              descripton={company.description}
              key={company.name}
            >
              {company.name}
            </Circle>
          )),
        [careerPath],
      )}
    </CareerCircleContainer>
  );
};

export default CareerBar;
