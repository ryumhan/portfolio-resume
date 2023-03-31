import { MutableRefObject } from 'react';
import { CAREER_PATH, INTRODUCTION_CONFIG } from '@/constants';
import CareerBar from './career-bar';
import { RightHalfContainer, Container, LeftHalfContainer } from './style';
import { Horizontal } from '../common-style';
import Profile from './profile';

interface Props {
  ryuRef: MutableRefObject<HTMLDivElement | null>;
}

const RyuMyungHan = ({ ryuRef }: Props): React.ReactElement => {
  return (
    <Container ref={ryuRef}>
      <Horizontal style={{ height: '100%' }}>
        <LeftHalfContainer>
          <Profile
            name={INTRODUCTION_CONFIG.name}
            email={INTRODUCTION_CONFIG.email}
            comment={INTRODUCTION_CONFIG.comment}
          />
        </LeftHalfContainer>
        <RightHalfContainer>
          <CareerBar careerPath={CAREER_PATH} />
        </RightHalfContainer>
      </Horizontal>
    </Container>
  );
};

export default RyuMyungHan;
