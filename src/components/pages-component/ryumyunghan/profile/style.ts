import styled from '@emotion/styled';
import Image from 'next/image';
import { GlobalColor, Vertical } from '@/components/common-style';

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
  border: solid 7px ${GlobalColor.contentsTone};
  cursor: pointer;
  transition: ease 0.2s;

  &:hover {
    background-color: skyblue;
    color: blue;
    border: solid 7px blue;
    width: 460px;
    height: 460px;
    border-radius: 50%;
  }
`;

export const ProfileImage = styled(Image)`
  object-fit: 'cover';
  object-position: 'center';
  &:hover {
    opacity: 0.3;
  }
`;

export const IntroductionBox = styled(Vertical)`
  gap: 2px;
`;

export const NameBox = styled.div``;

export const EmailBox = styled.div``;

export const IntroduceBox = styled.div`
  align-items: center;
  gap: 2px;
`;
