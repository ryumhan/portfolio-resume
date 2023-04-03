import { MutableRefObject } from 'react';
import { Horizontal } from '@/components/common-style';
import { CAREER_PATH, INTRODUCTION_CONFIG, SKILLSET_CONFIG } from '@/constants';
import CareerSection from './career-section';
import { RightHalfContainer, Container, LeftHalfContainer } from './style';
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
          <CareerSection careerPath={CAREER_PATH} skillSets={SKILLSET_CONFIG} />
        </RightHalfContainer>
      </Horizontal>
    </Container>
  );
};

export default RyuMyungHan;
