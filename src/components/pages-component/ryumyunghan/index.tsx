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
      <Profile
        name={INTRODUCTION_CONFIG.name}
        email={INTRODUCTION_CONFIG.email}
        comment={INTRODUCTION_CONFIG.comment}
        hobby={INTRODUCTION_CONFIG.hobby}
      />
    </Container>
  );
};

export default RyuMyungHan;
