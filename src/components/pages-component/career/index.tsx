import { MutableRefObject } from 'react';
import { CAREER_PATH, SKILLSET_CONFIG } from '@/constants';
import CareerSection from './career-section';
import { Container } from './style';

interface Props {
  carRef: MutableRefObject<HTMLDivElement | null>;
}

const Career = ({ carRef }: Props): React.ReactElement => {
  return (
    <Container ref={carRef}>
      <CareerSection careerPath={CAREER_PATH} skillSets={SKILLSET_CONFIG} />
    </Container>
  );
};

export default Career;
