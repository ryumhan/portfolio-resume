import styled from '@emotion/styled';
import { Vertical } from '@/components/common-style';

export const ProfileContainer = styled(Vertical)`
  margin: auto;
  gap: 100px;
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 350px;
  height: 460px;
  border-radius: 50%;
  border: solid 10px red;
`;

export const IntroductionBox = styled(Vertical)`
  align-items: center;
  gap: 2px;
`;

export const NameBox = styled.div``;

export const EmailBox = styled.div``;

export const IntroduceBox = styled.div`
  align-items: center;
  gap: 2px;
`;
