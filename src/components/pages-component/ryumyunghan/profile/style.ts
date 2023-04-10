import styled from '@emotion/styled';
import Image from 'next/image';
import { GlobalColor, Horizontal, Vertical } from '@/components/common-style';

export const ProfileContainer = styled(Vertical)`
  justify-content: center;
  align-items: center;
  gap: 70px;
  height: 100%;
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 380px;
  height: 380px;
  border-radius: 50%;
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
  filter: opacity(0.6) drop-shadow(0 0 0 #828282);
  &:hover {
    opacity: 0.3;
  }
`;

export const IntroductionBox = styled(Vertical)`
  gap: 6px;
`;

export const NameBox = styled.div``;

export const EmailBox = styled(Horizontal)``;

export const PhoneBox = styled(Horizontal)``;

export const IntroduceBox = styled.div`
  align-items: center;
  gap: 2px;
`;

export const ContactIconContainer = styled.div`
  position: relative;
  width: 24px;
  height: 25px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ContactImage = styled(Image)`
  object-fit: 'cover';
  object-position: 'center';
`;
