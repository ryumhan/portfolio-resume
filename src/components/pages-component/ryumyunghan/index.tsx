import { MutableRefObject } from 'react';
import { INTRODUCTION_CONFIG } from '@/constants';

import { Container } from './style';
import Profile from './profile';

interface Props {
  ryuRef: MutableRefObject<HTMLDivElement | null>;
}

const RyuMyungHan = ({ ryuRef }: Props): React.ReactElement => {
  return (
    <Container ref={ryuRef}>
      <Profile introduce={INTRODUCTION_CONFIG} />
    </Container>
  );
};

export default RyuMyungHan;
