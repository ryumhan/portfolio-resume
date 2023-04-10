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
        education={INTRODUCTION_CONFIG.education}
        email={INTRODUCTION_CONFIG.email}
        comment={INTRODUCTION_CONFIG.comment}
        phone={INTRODUCTION_CONFIG.phone}
      />
    </Container>
  );
};

export default RyuMyungHan;
